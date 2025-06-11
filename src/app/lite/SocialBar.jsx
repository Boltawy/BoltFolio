import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLetterboxd, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
export default function SocialBar() {
  return (
    <>
      <div className="flex justify-center pt-4 text-2xl gap-5">
        <a
          href="https://www.linkedin.com/in/boltawy/"
          target="_blank"
          className="hover:text-gray-200"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/boltawy/"
          target="_blank"
          className="hover:text-gray-200"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="mailto:boltawyy@gmail.com"
          target="_blank"
          className="hover:text-gray-200"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <div
          href=""
          target="_blank"
          className="hover:text-gray-200 cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faFilePdf} />
        </div>
      </div>
    </>
  );
}
