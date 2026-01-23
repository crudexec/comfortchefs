import { NextRequest, NextResponse } from 'next/server';
import { sendApplicationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const yearsOfExperience = formData.get('yearsOfExperience') as string;
    const availableStartDate = formData.get('availableStartDate') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const howDidYouHear = formData.get('howDidYouHear') as string;
    const resumeFile = formData.get('resume') as File;

    // Validate required fields
    if (!fullName || !email || !phone || !resumeFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a PDF or Word document.' },
        { status: 400 }
      );
    }

    // Validate file size (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (resumeFile.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());

    // Send email
    await sendApplicationEmail({
      applicantEmail: email,
      applicantName: fullName,
      phone,
      jobTitle,
      yearsOfExperience,
      availableStartDate,
      coverLetter: coverLetter || '',
      howDidYouHear: howDidYouHear || '',
      resumeBuffer: fileBuffer,
      resumeFileName: resumeFile.name,
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
