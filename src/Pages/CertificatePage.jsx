import { useParams } from "react-router-dom";
import data from "../Data/coursesData.json";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function CertificatePage() {
  const { slug } = useParams();

  const course = data.courses.find((c) => c.slug === slug);

  const user = JSON.parse(localStorage.getItem("users"))?.[0] || {};
  const studentName = user.name || "Riya Kumari";

  const progress =
    JSON.parse(localStorage.getItem("courseProgress")) || {};
  const courseProgress = progress[slug];

  if (!course) {
    return <p className="text-center mt-10">Certificate not found</p>;
  }

  if (!courseProgress || !courseProgress.testPassed) {
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        ❌ Complete course & test to unlock certificate
      </p>
    );
  }

  const downloadPDF = async () => {
    const element = document.getElementById("certificate");

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");

    pdf.addImage(imgData, "PNG", 10, 10, 277, 190);
    pdf.save(`${course.slug}-certificate.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4   flex flex-col items-center">

      {/* CERTIFICATE WRAPPER */}
      <div className="w-full overflow-x-auto">
        <div
          id="certificate"
          className="mx-auto origin-top
          scale-[0.35] sm:scale-[0.5] md:scale-[0.7] lg:scale-100"
          style={{
            width: "1120px",
            height: "790px",
            backgroundColor: "#ffffff",
            border: "8px solid #1d4ed8",
            padding: "60px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            boxSizing: "border-box",
          }}
        >
          {/* TITLE */}
          <h1 style={{ fontSize: "42px", color: "#1d4ed8" }}>
            Certificate of Completion
          </h1>

          <p style={{ marginTop: "40px", fontSize: "20px" }}>
            This is to certify that
          </p>

          <h2 style={{ fontSize: "32px", margin: "20px 0" }}>
            {studentName}
          </h2>

          <p style={{ fontSize: "18px" }}>
            has successfully completed the course
          </p>

          <h3 style={{ marginTop: "20px", fontSize: "24px" }}>
            {course.title}
          </h3>

          <p style={{ marginTop: "40px" }}>
            Date: {new Date().toLocaleDateString()}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "150px",
              padding: "0 40px",
            }}
          >
            <div style={{ width: "200px" }}>
              <p style={{ borderTop: "1px solid #000", paddingTop: "6px" }}>
                Instructor
              </p>
            </div>

            <div style={{ width: "200px" }}>
              <p style={{ borderTop: "1px solid #000", paddingTop: "6px" }}>
                Authorized Signature
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD BUTTON (OUTSIDE CERTIFICATE) */}
      <button
        onClick={downloadPDF}
        className="-mt-80 md:mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow"
      >
        ⬇ Download Certificate (PDF)
      </button>
    </div>
  );
}
