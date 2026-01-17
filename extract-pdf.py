import sys
import subprocess

# Try to import PyPDF2
try:
    import PyPDF2
except ImportError:
    print("Installing PyPDF2...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2", "-q"])
    import PyPDF2

# Extract text from PDF
with open('Signal_Intelligence_Definitions.pdf', 'rb') as file:
    pdf_reader = PyPDF2.PdfReader(file)
    text = ''
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += f"\n\n--- PAGE {page_num + 1} ---\n\n"
        text += page.extract_text()

# Write to text file
with open('Signal_Intelligence_Definitions.txt', 'w', encoding='utf-8') as output:
    output.write(text)

print(f"PDF extracted successfully! Total pages: {len(pdf_reader.pages)}")
