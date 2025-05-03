import emailjs from "@emailjs/browser";

const SERVICE_ID ="service_j86f0ic";
const OPTIONS = "X_ptKww76Wf9icNDI";


 export function sendEmail(templateId, templateParams){
    // Add loading state if needed
    return emailjs
      .send(
        SERVICE_ID,
        templateId,
        templateParams,
        OPTIONS
      );
      
}
