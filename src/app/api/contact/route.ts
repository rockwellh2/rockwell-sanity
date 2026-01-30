import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  industry: z.string().min(1, "Industry is required"),
  location: z.string().optional(),
  daily_h2: z.string().optional(),
  power: z.string().optional(),
  system: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // In production, you would:
    // 1. Send email to info@rockwellh2.com
    // 2. Store in database
    // 3. Send confirmation to user
    // 4. Create CRM entry
    
    // For now, log the data (replace with actual email service)
    console.log("Contact form submission:", data);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: "Engineering request received. We'll respond within 1-2 business days.",
        reference: `REQ-${Date.now().toString(36).toUpperCase()}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
