// TODO: move this to some sort of backend

export const QuestionOneTitle =
  "If there is a default password provided for using your device and you are allowed to change it, will you change it?";

export const QuestionOneOptionOne = () => {
  return (
    <>
      <br />
      Good! It is recommended to change any default passwords to protect your
      devices and any personal data they may collect, store, and use. Default
      passwords can be easily identified and used by attackers to compromise
      your devices and personal data. Whenever you are allowed to change default
      passwords, it is strongly advised for you to do so by many organizations
      (e.g.,
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cisa.gov/uscert/ncas/alerts/TA13-175A"
        >
          CISA
        </a>
      }
      ).
    </>
  );
};

export const QuestionOneOptionTwo = () => {
  return (
    <>
      <br />
      This choice can compromise your security in the future. It is recommended
      to change any default passwords to protect your devices and any personal
      data they may collect, store, and use. Default passwords can be easily
      identified and used by attackers to compromise your devices and personal
      data. Whenever you are allowed to change default passwords, it is strongly
      advised for you to do so by many organizations (e.g.,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cisa.gov/uscert/ncas/alerts/TA13-175A"
        >
          CISA
        </a>
      }
      ). Your new password should not be blank or null, it should differ from
      your account name (or login), and ideally, it should contain more than 12
      characters. When you create a new password, it is recommended to follow
      security recommendations. For example, you can adhere to recommendations
      provided by{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cyber.gc.ca/en/guidance/best-practices-passphrases-and-passwords-itsap30032"
        >
          Canadian Centre for Cyber Security
        </a>
      }
      .
    </>
  );
};

export const QuestionTwoTitle =
  "Will you use blank or null passwords for your device?";

export const QuestionTwoOptionOne = () => {
  return (
    <>
      <br />
      This choice can compromise your security in the future. Blank or null
      passwords pose a big security threat to your devices and personal data. In
      the case of blank or null passwords, an attacker does not need to spend
      any time at all to compromise your device's security. By having blank or
      null passwords, users are leaving the door open for an attacker to come
      in, which is not desirable. You should never have blank or null passwords.
      Your password should be complex enough to protect you from attackers.
    </>
  );
};

export const QuestionTwoOptionTwo = () => {
  return (
    <>
      <br />
      Good! Blank or null passwords pose a big security threat to your devices
      and personal data. You should never have blank or null passwords.
    </>
  );
};
