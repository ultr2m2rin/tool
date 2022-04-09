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
