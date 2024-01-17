import MailSlurp from "mailslurp-client";
import { useEffect } from "react";

const Inbox = () => {
  useEffect(() => {
    const fetchData = async () => {
      // create mailslurp client
      const mailslurp = new MailSlurp({ apiKey: "a7e1b931ae6c8eec8de8680d9f25c29818b9c3b3314d072a3a934501b98e9b17" });

      try {
        // create inboxes
        const inbox1 = await mailslurp.createInbox();
        const inbox2 = await mailslurp.createInbox();

        // send email
        await mailslurp.sendEmail(inbox1.id, {
          to: [inbox2.emailAddress],
          subject: "Test",
          body: "<span>Hello 👋</span>",
          isHTML: true
        });

        // receive email using wait methods
        const email = await mailslurp.waitForLatestEmail(inbox2.id, 60000, true);
        console.log('Received email:', email.body);

        // list emails in inbox
        const emails = await mailslurp.inboxController.getInboxEmailsPaginated({ inboxId: inbox2.id });
        console.log('Total emails in inbox:', emails.totalElements);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
/* 
  return (
    <div>
      <h1>MailSlurp Example</h1>
      {email && (
        <div>
          <h2>Email Received</h2>
          <p>{`Subject: ${email.subject}`}</p>
          <p>{`Body: ${email.body}`}</p>
        </div>
      )}
    </div>
  );
}; */
  return (
    <div className="bg-white py-20 px-4 border-b">
      <div className="md:w-3/5 mx-auto border rounded-lg md:rounded-2xl ">
        <div className="bg-black flex justify-between px-5 py-5 text-white md:py-8 rounded-t-lg md:rounded-t-2xl">
          <h2>SENDER</h2>
          <h2>SUBJECT</h2>
          <h2>VIEW</h2>
        </div>
        <div className="md:w-2/4 mx-auto text-center py-20 space-y-5">
          <div className="flex justify-center">
          <svg
            width="92"
            height="94"
            viewBox="0 0 92 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 54.37V38.9C26.003 37.125 26.9469 35.4846 28.48 34.59L43.48 25.84C45.027 24.9468 46.933 24.9468 48.48 25.84L63.48 34.59C65.0285 35.4745 65.9887 37.1167 66 38.9V54.37C66 57.1314 63.7614 59.37 61 59.37H31C28.2386 59.37 26 57.1314 26 54.37Z"
              fill="#8C92A5"
            ></path>
            <path
              d="M46 47.7L26.68 36.39C26.2325 37.1579 25.9978 38.0312 26 38.92V54.37C26 57.1314 28.2386 59.37 31 59.37H61C63.7614 59.37 66 57.1314 66 54.37V38.9C66.0022 38.0112 65.7675 37.1379 65.32 36.37L46 47.7Z"
              fill="#CDCDD8"
            ></path>
            <path
              d="M27.8999 58.27C28.7796 58.9758 29.8721 59.3634 30.9999 59.37H60.9999C63.7613 59.37 65.9999 57.1314 65.9999 54.37V38.9C65.9992 38.0287 65.768 37.1731 65.3299 36.42L27.8999 58.27Z"
              fill="#E5E5F0"
            ></path>
            <path
              className="emptyInboxRotation"
              d="M77.8202 29.21L89.5402 25.21C89.9645 25.0678 90.4327 25.1942 90.7277 25.5307C91.0227 25.8673 91.0868 26.348 90.8902 26.75L87.0002 34.62C86.8709 34.8874 86.6407 35.0924 86.3602 35.19C86.0798 35.2806 85.7751 35.2591 85.5102 35.13L77.6502 31.26C77.2436 31.0643 76.9978 30.6401 77.0302 30.19C77.0677 29.7323 77.3808 29.3438 77.8202 29.21Z"
              fill="#E5E5F0"
            ></path>
            <path
              className="emptyInboxRotation"
              d="M5.12012 40.75C6.36707 20.9791 21.5719 4.92744 41.2463 2.61179C60.9207 0.296147 79.4368 12.3789 85.2401 31.32"
              stroke="#E5E5F0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              className="emptyInboxRotation"
              d="M14.18 57.79L2.46001 61.79C2.03313 61.9358 1.56046 61.8088 1.2642 61.4686C0.967927 61.1284 0.906981 60.6428 1.11001 60.24L5.00001 52.38C5.12933 52.1127 5.35954 51.9076 5.64001 51.81C5.92044 51.7194 6.22508 51.7409 6.49001 51.87L14.35 55.74C14.7224 55.9522 14.9394 56.36 14.9073 56.7874C14.8753 57.2149 14.5999 57.5857 14.2 57.74L14.18 57.79Z"
              fill="#E5E5F0"
            ></path>
            <path
              className="emptyInboxRotation"
              d="M86.9998 45.8C85.9593 65.5282 70.9982 81.709 51.4118 84.2894C31.8254 86.8697 13.1841 75.1156 7.06982 56.33"
              stroke="#E5E5F0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          </div>
          <h2 className="text-xl text-gray-900">Your inbox is empty</h2>
          <p className="text-md">Waiting for incoming emails</p>
          </div>
      </div>
      <div className="text-center md:w-3/5 mx-auto mt-10">
        <h2 className="text-black text-3xl font-bold">What is Disposable Temporary E-mail?</h2>
        <p className="text-gray-800 mt-5 tracking-tight text-sm text-justify"><span className="font-bold">Disposable email</span> - is a free email service that allows to receive email at a temporary address that self-destructed after a certain time elapses. It is also known by names like : tempmail, 10minutemail, 10minmail, throwaway email, fake-mail , fake email generator, burner mail or trash-mail. Many forums, Wi-Fi owners, websites and blogs ask visitors to register before they can view content, post comments or download something. Temp-Mail - is most advanced throwaway email service that helps you avoid spam and stay safe.</p>
      </div>
    </div>
  );
};

export default Inbox;
