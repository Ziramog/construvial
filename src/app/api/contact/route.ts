import { NextRequest, NextResponse } from "next/server"

const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || "info@construvialsa.com.ar"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, tipoConsulta, mensaje } = body

    // Basic server-side validation
    if (!nombre || !email || !tipoConsulta || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured. Email not sent.")
      return NextResponse.json(
        { success: true, message: "Consulta recibida (email no configurado)" },
        { status: 200 }
      )
    }

    // Send email via Resend
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: "Construvial Web <onboarding@resend.dev>", // Change to your verified domain
      to: CONTACT_EMAIL_TO,
      subject: `Nueva consulta desde la web - ${tipoConsulta}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B3A6B; border-bottom: 3px solid #E8720C; padding-bottom: 10px;">
            Nueva Consulta desde construvialsa.com.ar
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Nombre</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Teléfono</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${telefono || "No proporcionado"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Tipo de Consulta</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${tipoConsulta}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${mensaje}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de construvialsa.com.ar
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Email enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    )
  }
}
