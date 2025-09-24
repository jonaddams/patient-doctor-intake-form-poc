# HTML to PDF Conversion Instructions

## Overview
This project includes 6 HTML forms in the `forms/` directory that need to be converted to PDF with form fields for use with the Nutrient Web SDK.

## HTML Forms Created
1. **01-patient-demographics.html** - Patient personal information (1 page)
2. **02-emergency-contact.html** - Emergency contact details (2 pages)
3. **03-insurance-verification.html** - Insurance information (2 pages)
4. **04-medical-history.html** - Medical history and medications (3 pages)
5. **05-hipaa-authorization.html** - HIPAA privacy authorization (2 pages)
6. **06-financial-responsibility.html** - Financial agreement (2 pages)

**Note**: Forms include proper `page-break-after: always` CSS for logical page breaks during PDF conversion.

## Conversion Process

### Step 1: Convert HTML to PDF
Use any HTML-to-PDF converter. Recommended options:

**Option A: Browser Print to PDF**
1. Open each HTML file in Chrome/Firefox
2. Print → Save as PDF
3. Use these print settings:
   - Paper size: Letter (8.5 x 11 inches)
   - Margins: Minimum (0.4 inches)
   - Scale: 100%
   - Headers and footers: Off
   - Background graphics: On
   - **Important**: The CSS includes `page-break-after: always` for proper multi-page layout

**Option B: Command Line Tools**
```bash
# Using wkhtmltopdf
wkhtmltopdf --page-size Letter --margin-top 0.5in --margin-bottom 0.5in --margin-left 0.5in --margin-right 0.5in forms/01-patient-demographics.html public/documents/01-patient-demographics.pdf

# Using headless Chrome
google-chrome --headless --disable-gpu --print-to-pdf=public/documents/01-patient-demographics.pdf --print-to-pdf-no-header file://$(pwd)/forms/01-patient-demographics.html
```

### Step 2: Add Form Fields (Using Nutrient SDK)
After converting to PDF, you can use Nutrient SDK to add interactive form fields:

```javascript
// Example: Adding form fields programmatically
const formFields = [
  {
    name: "lastName",
    type: "text",
    bbox: [x, y, width, height], // Coordinates for the field
    page: 0
  },
  {
    name: "firstName",
    type: "text",
    bbox: [x, y, width, height],
    page: 0
  },
  {
    name: "signature",
    type: "signature",
    bbox: [x, y, width, height],
    page: 0
  }
  // ... more fields
];
```

### Step 3: Expected Output Files
Place the converted PDFs in `public/documents/`:
- `01-patient-demographics.pdf`
- `02-emergency-contact.pdf`
- `03-insurance-verification.pdf`
- `04-medical-history.pdf`
- `05-hipaa-authorization.pdf`
- `06-financial-responsibility.pdf`

## Form Field Mapping

### Key Form Fields to Add:
- **Text Fields**: Name, address, phone, email, dates
- **Checkboxes**: Gender, marital status, insurance relationships
- **Signature Fields**: Patient signatures on each form
- **Date Fields**: Signature dates

### Pre-populated Data
The forms are designed to work with the patient data in `data/patient-data.json`. The fields should be pre-populated with:
- Patient: Sarah Marie Johnson
- DOB: 03/15/1987
- Address: 1245 Oak Street, Springfield, IL 62701
- Phone: (555) 123-4567
- Emergency Contact: Michael Johnson (Spouse)

## Demo Usage
1. Convert HTML forms to PDF with form fields
2. Place PDFs in `public/documents/`
3. Run the Next.js application
4. Navigate to Patient Portal demo
5. Forms will load with pre-populated data from JSON file

## Notes for Video Demo
- The forms are realistic medical intake forms
- Pre-populated data saves significant time vs paper forms
- Electronic signatures provide better compliance than paper
- Digital forms eliminate transcription errors
- Data can be automatically integrated with practice management systems

## Styling Notes
- Forms use Times New Roman font (medical standard)
- Professional medical practice appearance
- Form fields have gray backgrounds for visibility
- Checkboxes show pre-selected values with ✓ marks
- Signature areas are clearly marked with lines