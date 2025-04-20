// Netlify serverless function for contact form
export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    // In a real implementation, you would send an email or store in a database
    // For now, we'll just return a success response
    
    // Log the submission (visible in Netlify function logs)
    console.log("Contact form submission:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Contact form submitted successfully",
        submittedAt: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
}