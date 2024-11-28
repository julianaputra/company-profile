const SUPABASE_URL = "https://rxuldkugkimwtpwjcvjv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dWxka3Vna2ltd3Rwd2pjdmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2OTY5MjgsImV4cCI6MjA0ODI3MjkyOH0.m8WTkQ84NFfs5Zq3GcNQt-GoqKt4bBLQSmfqYNyyncQ";
const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
  };

  // Insert data into Supabase using Fetch API
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/ContactMessages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to insert data");
    }
    if(response.ok){
        Swal.fire('Selamat!', 'Data Anda berhasil terkirim', 'success');
    }else{
        Swal.fire('Oooopss!', 'Sepertinya ada yang salah', 'error');
    }

    responseMessage.textContent = "Message sent successfully!";
    responseMessage.classList.remove("hidden");
    contactForm.reset();
  } catch (err) {
    responseMessage.textContent = "Failed to send message.";
    responseMessage.classList.remove("hidden");
  }
});