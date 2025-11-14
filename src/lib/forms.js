


export async function sendReservation(formData) {
   
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.text(); 
    return data
  } catch (error) {
    console.error("Error al enviar la reserva:", error)
    throw error 
  }
}
