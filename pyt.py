from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 16)
        self.cell(0, 10, 'Facial Emotion Recognition: Comparative Research Analysis', 0, 1, 'C')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

def create_research_pdf():
    pdf = PDF('L', 'mm', 'A4') # Landscape mode
    pdf.add_page()
    pdf.set_font("Arial", size=9)

    # Column Widths (Total approx 275mm)
    # Ref, Arch, Data, Results, Limits, Novelty, Gaps, Future
    w = [30, 35, 30, 35, 35, 35, 35, 35]
    
    # Headers
    headers = ["Reference", "Architecture", "Datasets", "Results", "Limitations", "Novelties", "Gaps", "Future Scope"]
    
    pdf.set_fill_color(200, 220, 255) # Light blue header
    pdf.set_font("Arial", 'B', 9)
    
    # Print Header Row
    for i in range(len(headers)):
        pdf.cell(w[i], 10, headers[i], 1, 0, 'C', 1)
    pdf.ln()

    # Data from your papers
    data = [
        [
            "Paper 1:\nPodder et al.\n(2022)",
            "LiveEmoNet\n(Lightweight CNN)\n\nUses Global Avg Pooling (GAP) to reduce params to 1.3M.",
            "Hybrid Training:\nFER-2013 (Wild) + CK+ (Lab)",
            "Acc: 68.96% (Wild)\nAcc: 96.67% (Lab)\n\nSpeed: 46ms (21 FPS) on i5 CPU.",
            "- Fails on masks/hands occlusion.\n- Poor side-profile detection.\n- Confuses Sad vs Fear.",
            "- Joint Training (Wild+Lab) improves stability.\n- GAP layer removes need for GPU.",
            "- Static analysis causes flickering.\n- Not tested on mobile/edge devices.",
            "- Use temporal (video) analysis.\n- Improve robustness for extreme poses."
        ],
        [
            "Paper 2:\nLi & Deng\n(2020)",
            "ECAN\n(Emotion-Conditional Adaption)\n\nMatches marginal & conditional distributions.",
            "Source: RAF-DB\nTarget: CK+, JAFFE, FER2013, SFEW",
            "Cross-Dataset Acc:\n- To CK+: 86.5%\n- To FER: 58.2%\n- To MMI: 69.9%",
            "- Domain Shift: Accuracy drops 40% when moving from Lab to Wild.\n- Class Imbalance affects results.",
            "- Solves 'Conditional Distribution Bias'.\n- Re-weights classes to fix imbalance.",
            "- Negative Transfer risks.\n- Model is heavy for real-time usage.",
            "- Develop universal features (Race/Age agnostic).\n- Better handling of unknown labels."
        ],
        [
            "Paper 3:\nGursesli et al.\n(2024)",
            "CLCM\n(Custom Lightweight)\n\nBased on MobileNetV2 with custom classifier.",
            "Training: AffectNet, RAF-DB, FER-2013.\nTest: CK+",
            "Acc: 84% (RAF-DB)\nAcc: 63% (FER)\n\nInference: 0.05s (Fastest among peers).",
            "- Struggles with 'Fear' & 'Disgust' (lack of data).\n- Low accuracy on large AffectNet (54%).",
            "- Outperforms larger models (ShuffleNet) with fewer params (2.4M).\n- Web-ready structure.",
            "- Hyperparameters not fully optimized.\n- Relies on static images.",
            "- Use Synthetic Data (GANs) to balance classes.\n- Add model interpretability."
        ],
        [
            "Paper 4:\nCarvalho et al.\n(2024)",
            "Systematic Review\n(Commercial Software)\n\nFaceReader, iMotions, Face++, Azure.",
            "Review of 35 studies (Lab & Naturalistic)",
            "- FaceReader is most reliable (86-97% in lab).\n- Accuracy drops in natural settings.",
            "- Lack of standardization makes comparison impossible.\n- Low ecological validity in labs.",
            "- Proposes new protocol: 4K cameras, 10-40s clips, hidden recording.",
            "- No clarity on video file standards.\n- Need for individual baselining.",
            "- Validate in 'wild' (schools/crowds).\n- Establish ethical hidden-recording guidelines."
        ]
    ]

    pdf.set_font("Arial", size=8)
    pdf.set_fill_color(255, 255, 255)

    # Logic to print rows with automatic height calculation
    for row in data:
        # Calculate max height for the row based on the cell with the most text
        line_height = 5
        max_lines = 1
        for i in range(len(row)):
            # Get width of current column
            col_width = w[i]
            # Calculate how many lines this text will take
            # This is an estimation. FPDF doesn't have a direct 'get_height' for multi_cell easily accessible
            # We estimate by length of string vs width. 
            # For a more robust solution, we would split string manually.
            # Here we assume roughly 45 characters fit in 35mm at size 8
            lines = pdf.multi_cell(col_width, line_height, row[i], split_only=True)
            if len(lines) > max_lines:
                max_lines = len(lines)
        
        row_height = max_lines * line_height

        # Check for page break
        if pdf.get_y() + row_height > 190:
            pdf.add_page()
            
            # Reprint header
            pdf.set_font("Arial", 'B', 9)
            pdf.set_fill_color(200, 220, 255)
            for i in range(len(headers)):
                pdf.cell(w[i], 10, headers[i], 1, 0, 'C', 1)
            pdf.ln()
            pdf.set_font("Arial", size=8)

        # Print the cells
        x_start = pdf.get_x()
        y_start = pdf.get_y()
        
        for i in range(len(row)):
            pdf.multi_cell(w[i], line_height, row[i], border=1, align='L')
            # Move cursor to top right of this cell for the next one
            pdf.set_xy(x_start + sum(w[:i+1]), y_start)
        
        # Move to next line
        pdf.ln(row_height)

    pdf.output("Research_Comparison_Table.pdf")
    print("PDF generated successfully!")

if __name__ == '__main__':
    create_research_pdf()