import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLetterboxd,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
export default function SocialBar({ vertical = false, className = "" }) {
  let styling;
  if (vertical)
    styling = `flex flex-col justify-center fixed top-1/2 h-screen -translate-y-1/2 left-8  py-16 text-2xl gap-5 text-gray-200/50 animate__animated animate__fadeIn
        before:content-[''] before:w-1 before:relative before:top-0 before:left-2 before:h-1/2 before:bg-gray-200/20
      after:content-[''] after:w-1 after:relative after:bottom-0 after:left-2 after:h-1/2 after:bg-gray-200/20`;
  else
    styling = `flex justify-center text-2xl gap-6 text-gray-200/50 animate__animated animate__fadeIn`;

  return (
    <>
      <div className={styling + " " + className}>
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
          href="mailto:boltawy.dev@gmail.com"
          target="_blank"
          className="hover:text-gray-200"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href={null}
          target="_blank"
          className="hover:text-gray-200 cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faFilePdf} />
        </a>
      </div>
    </>
  );
}
