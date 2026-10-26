const DESTINATION = "hello@mirasai.co";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${DESTINATION}`;

function value(input, key, maxLength) {
  return String(input?.[key] ?? "").trim().slice(0, maxLength);
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, message: "Method not allowed." });
  }

  let body;
  try {
    body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : (request.body || {});
  } catch (_) {
    return response.status(400).json({ ok: false, message: "Invalid form submission." });
  }
  if (value(body, "_gotcha", 200)) return response.status(200).json({ ok: true });

  const name = value(body, "name", 120);
  const email = value(body, "email", 254);
  const company = value(body, "company", 160);
  const serviceType = value(body, "serviceType", 120);
  const message = value(body, "message", 5000);

  if (name.length < 2 || !validEmail(email) || message.length < 10) {
    return response.status(400).json({ ok: false, message: "Please provide your name, a valid email address and a short project description." });
  }

  try {
    const relay = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company: company || "Not provided",
        area_of_interest: serviceType || "Not selected",
        message,
        _subject: `New project enquiry from ${name}`,
        _template: "table",
        _captcha: "false",
        _url: "https://mirasai.co/contact",
      }),
    });

    if (!relay.ok) throw new Error(`Form relay returned ${relay.status}`);
    return response.status(200).json({ ok: true, message: "Thank you. Your message has been sent to Miras AI." });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return response.status(502).json({ ok: false, message: `We could not send your message. Please email ${DESTINATION} directly.` });
  }
}
