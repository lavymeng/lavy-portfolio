import { useEffect, useState } from "react";
import Link from "next/link";

const DownloadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = () => {
    setIsLoading(true);

    // Trigger the file download by making a request to the file URL
    fetch("/api/download")
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the file blob
        const url = URL.createObjectURL(blob);

        // Create a link element and simulate a click to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.download = "lavyCVHah.pdf";
        link.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error occurred during file download:", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Link
        href="#"
        onClick={handleDownloadClick}
        className="block lg:inline-block text-neutral-900  hover:text-neutral-500 hover:cursor-pointer dark:text-neutral-100"
      >
        {isLoading ? "Downloading..." : "Download CV"}
      </Link>
    </div>
  );
};

export default DownloadPage;
