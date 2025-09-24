# Digital Patient Intake Form Demo

A compelling healthcare use case demonstration showcasing how Nutrient Web SDK can transform the traditional paper clipboard experience into a streamlined digital patient intake process.

## 🎯 Demo Overview

This project demonstrates the transformation from paper-based patient intake forms to a digital solution that:
- **Saves Time**: Reduces intake time from 20 minutes to 5 minutes
- **Improves Accuracy**: Eliminates transcription errors with pre-populated data
- **Enhances Security**: Digital signatures and encrypted storage for HIPAA compliance

## 🏥 Use Case: Doctor's Office Visit

**The Problem**: Traditional medical offices require patients to fill out 12-15 pages of repetitive paperwork on clipboards, writing the same information multiple times.

**The Solution**: Digital forms with intelligent pre-population, electronic signatures, and seamless integration with practice management systems.

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Your Browser**
   Navigate to `http://localhost:3001` (or the port shown in terminal)

## 📋 Demo Flow

### 1. Landing Page
- **Before/After comparison** between paper and digital solutions
- **Problem statement** highlighting patient and practice pain points
- **Interactive demo selection** to experience both approaches

### 2. Digital Patient Portal
- **Smart pre-population** using existing patient data
- **Progress tracking** with estimated time remaining
- **Intuitive form navigation** with completion indicators

### 3. Document Viewing & Signing
- **Nutrient Web SDK integration** for PDF form viewing
- **Pre-filled form fields** based on patient data
- **Electronic signature workflow** for HIPAA compliance

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Demo landing page
│   ├── patient-portal/       # Digital intake experience
│   └── viewer/              # Document viewer (existing)
├── components/
│   └── Viewer.tsx           # Nutrient Web SDK component
├── data/
│   └── patient-data.json    # Sample patient information
├── forms/                   # HTML forms for PDF conversion
│   ├── 01-patient-demographics.html
│   ├── 02-emergency-contact.html
│   ├── 03-insurance-verification.html
│   ├── 04-medical-history.html
│   ├── 05-hipaa-authorization.html
│   └── 06-financial-responsibility.html
└── public/documents/        # Converted PDF forms (see below)
```

## 📄 Forms Included

1. **Patient Demographics** - Name, address, contact information
2. **Emergency Contact** - Contact person and medical decision maker
3. **Insurance Verification** - Primary/secondary insurance details
4. **Medical History** - Medications, allergies, conditions, surgeries
5. **HIPAA Authorization** - Privacy permissions and communication preferences
6. **Financial Responsibility** - Payment terms and insurance policies

## 🔄 Converting HTML Forms to PDF

The project includes realistic HTML forms that need to be converted to PDF with form fields:

1. **See `CONVERSION_INSTRUCTIONS.md`** for detailed conversion steps
2. **Use browser Print-to-PDF** or command line tools like wkhtmltopdf
3. **Add form fields** using Nutrient SDK for interactivity
4. **Place converted PDFs** in `public/documents/` directory

### Required PDF Files:
- `01-patient-demographics.pdf`
- `02-emergency-contact.pdf`
- `03-insurance-verification.pdf`
- `04-medical-history.pdf`
- `05-hipaa-authorization.pdf`
- `06-financial-responsibility.pdf`

## 🎬 Video Demo Script

### Introduction (2-3 min)
- Show physical clipboard with 6+ paper forms
- Explain typical patient frustration and time requirements
- Highlight practice challenges: data entry, storage, compliance

### Problem Demonstration (2 min)
- Point out repetitive information across forms
- Show illegible handwriting issues
- Discuss lost/incomplete forms and manual processing

### Digital Solution Demo (8-10 min)
- Navigate to patient portal
- Show pre-populated forms with existing data
- Demonstrate form completion with electronic signatures
- Highlight time savings and accuracy improvements

### Benefits & Conclusion (2-3 min)
- Summarize ROI: time savings, accuracy, compliance
- Show integration possibilities with EMR systems
- Call-to-action: Try Nutrient Web SDK at nutrient.io

## 👤 Sample Patient Data

The demo uses realistic anonymized data for **Sarah Marie Johnson**:
- **Personal**: Born 03/15/1987, Springfield, IL resident
- **Medical**: Hypertension, seasonal allergies, penicillin allergy
- **Contact**: Emergency contact Michael Johnson (spouse)
- **Insurance**: Blue Cross Blue Shield primary, United Healthcare secondary

## 🛠️ Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Nutrient Web SDK** - PDF viewing and form handling
- **JSON Data** - Sample patient information storage

## 📊 Demo Benefits

| Traditional Paper | Digital Solution |
|-------------------|------------------|
| 15-20 minutes | 3-5 minutes |
| Handwriting errors | Type-validated data |
| Lost forms | Secure digital storage |
| Manual data entry | Automatic integration |
| HIPAA concerns | Built-in compliance |

## 🎯 Target Audience

- **Healthcare Providers** - Doctors, nurses, practice managers
- **Software Developers** - Integrating document solutions
- **Healthcare IT** - Evaluating digital transformation tools
- **Practice Administrators** - Seeking efficiency improvements

This demo effectively showcases how Nutrient Web SDK can solve real-world healthcare challenges while providing measurable ROI through improved efficiency and patient experience.