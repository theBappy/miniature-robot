import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/window_wrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      {/* Added top padding here */}
      <div className="p-5 pt-8 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="theBappy"
          className="w-20 rounded-full"
        />

        <h3>Let&apos;s connect</h3>
        <p>
          Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
        </p>
        <p>thebappy575@gmai.com</p>

        <ul>
          {socials.map(({ id, bg, link, text, icon }) => (
            <li style={{ backgroundColor: bg }} key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
