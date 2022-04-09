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

export const QuestionThreeTitle =
  "Will your password be the same as your account name?";

export const QuestionThreeOptionOne = () => {
  return (
    <>
      <br />
      This choice can compromise your security in the future. When a password is
      the same as your account name (or login), it is easy for an attacker to
      compromise your security since they will be able to guess it very easily
      and very fast. Your password should always be different from your account
      name (or login). Your password should be complex enough to protect you
      from attackers.
    </>
  );
};

export const QuestionThreeOptionTwo = () => {
  return (
    <>
      <br />
      Good! Your password should always be different from your account name (or
      login). Your password should be complex enough to protect you from
      attackers.
    </>
  );
};

export const QuestionThreeOptionThree = () => {
  return (
    <>
      <br />
      When a password is the same as your account name (or login), it is easy
      for an attacker to compromise your security since they will be able to
      guess it very easily and very fast. Your password should always be
      different from your account name (or login). Your password should be
      complex enough to protect you from attackers.
    </>
  );
};

export const QuestionFourTitle =
  "Will your password for your device be at least 12 characters long?";

export const QuestionFourOptionOne = () => {
  return (
    <>
      <br />
      Good! Long and complex passwords are quite difficult to be compromised.
      The more characters your password contains, the more combinations there
      will be for an attacker to go through before they will be able to crack
      it. This process takes a lot of time and computational power. With longer
      and more complex passwords, the attacker will not be able to compromise
      your security as easily as with simple and short passwords.
    </>
  );
};

export const QuestionFourOptionTwo = () => {
  return (
    <>
      <br />
      This choice can compromise your security in the future. Unlike simple
      passwords, long and complex ones are quite difficult to be compromised.
      The more characters your password contains, the more combinations there
      will be for an attacker to go through before they will be able to crack
      it. This process takes a lot of time and computational power. With longer
      and more complex passwords, the attacker will not be able to compromise
      your security as easily as with simple and short passwords. Your password
      should be long and complex enough to protect you from attackers.
    </>
  );
};

export const QuestionFiveTitle =
  "Will you follow any security recommendations when creating your new password?";

export const QuestionFiveOptionOne = () => {
  return (
    <>
      <br />
      Good! There are plenty of trustworthy sources that provide recommendations
      on how to create secure passwords. For example, you can adhere to
      recommendations posted by{" "}
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

export const QuestionFiveOptionTwo = () => {
  return (
    <>
      <br />
      You may want to reconsider this. Many public and private organizations
      usually have their recommendations on how to create secure passwords. For
      example, you can review recommendations by{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/accounts/answer/32040?hl=en"
        >
          Google
        </a>
      }
      ,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb"
        >
          Microsoft
        </a>
      }
      ,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cyber.gc.ca/en/guidance/best-practices-passphrases-and-passwords-itsap30032"
        >
          Canadian Centre for Cyber Security
        </a>
      }
      , or many others.
    </>
  );
};

export const QuestionSixTitle =
  "Will you use any password managers to store the password?";

export const QuestionSixOptionOne = () => {
  return (
    <>
      <br />
      Good! Password managers allow their users to store the passwords in a
      secure way. Always choose a password manager that you can trust, has many
      good reviews, and functions to meet your needs (e.g., it can be a mobile
      app or a PC app).
    </>
  );
};

export const QuestionSixOptionTwo = () => {
  return (
    <>
      <br />
      You may want to reconsider this. It is important to store your passwords
      in a secure place. For example, many people tend to write their passwords
      down on a piece of paper and leave it in a visible spot, which poses many
      security risks. Password managers allow their users to store the passwords
      in a secure way. Always choose a password manager that you can trust, has
      many good reviews, and functions to meet your needs (e.g., it can be a
      mobile app or a PC app).
    </>
  );
};

export const QuestionSixOptionThree = () => {
  return (
    <>
      <br />
      It is important to store your passwords in a secure place. For example,
      many people tend to write their passwords down on a piece of paper and
      leave it in a visible spot, which poses many security risks. Password
      managers allow their users to store the passwords in a secure way. Always
      choose a password manager that you can trust, has many good reviews, and
      functions to meet your needs (e.g., it can be a mobile app or a PC app).
    </>
  );
};

export const QuestionSevenTitle =
  "Will anyone else who you know be familiar with your password or have access to it?";

export const QuestionSevenOptionOne = () => {
  return (
    <>
      <br />
      You may want to reconsider this. It is important to store your passwords
      securely and limit the number of people who can access them. Ideally, you
      should be the only person who knows your passwords. However, if some other
      people must know your password, you should be able to trust them and
      introduce them to best practices regarding secure passwords.
    </>
  );
};

export const QuestionSevenOptionTwo = () => {
  return (
    <>
      <br />
      Good! It is important to store your passwords securely and limit the
      number of people who can access them. Ideally, you should be the only
      person who knows your passwords. However, if some other people must know
      your password, you should be able to trust them and introduce them to best
      practices regarding secure passwords.
    </>
  );
};

export const QuestionSevenOptionThree = () => {
  return (
    <>
      <br />
      It is important to store your passwords securely and limit the number of
      people who can access them. Ideally, you should be the only person who
      knows your passwords. However, if some other people must know your
      password, you should be able to trust them and introduce them to best
      practices regarding secure passwords.
    </>
  );
};

export const QuestionEightTitle =
  "Were you asked to consider two-factor authentication for controlling your device?";

export const QuestionEightOptionTwo = () => {
  return (
    <>
      <br />
      Two-factor authentication (2FA) is a type of multi-factor authentication
      that requires a user to use two methods to verify their identity. This is
      done for security purposes. For example, the first method you can use is
      providing your credentials (e.g., login and password). The second method
      can be represented by using authenticator applications with one-time
      passcodes like{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=LvTg6wAPiJk"
        >
          Duo
        </a>
      }
      . You can also receive a one-time passcode sent to your phone or email.
      Generally, when you are asked to enable 2FA, you will be provided with
      possible options to do so. We recommend reading the details and choosing
      the most suitable option. 2FA provides an additional level of security,
      making it more difficult for an attacker to break through it.
    </>
  );
};

export const QuestionEightOptionThree = () => {
  return (
    <>
      <br />
      Two-factor authentication (2FA) is a type of multi-factor authentication
      that requires a user to use two methods to verify their identity. This is
      done for security purposes. For example, the first method you can use is
      providing your credentials (e.g., login and password). The second method
      can be represented by using authenticator applications with one-time
      passcodes like{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=LvTg6wAPiJk"
        >
          Duo
        </a>
      }
      . You can also receive a one-time passcode sent to your phone or email.
      Generally, when you are asked to enable 2FA, you will be provided with
      possible options to do so. We recommend reading the details and choosing
      the most suitable option. 2FA provides an additional level of security,
      making it more difficult for an attacker to break through it.
    </>
  );
};

export const QuestionNineTitle =
  "Were you asked to consider two-factor authentication for controlling your device?";

export const QuestionNineOptionOne = () => {
  return (
    <>
      <br />
      Good! Two-factor authentication (2FA) is a type of multi-factor
      authentication that requires a user to use two methods to verify their
      identity. The first method is usually about using your credentials (e.g.,
      login and password). The second method is to provide a one-time passcode
      sent to your phone or email or found in a special authenticator
      application like{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=LvTg6wAPiJk"
        >
          Duo
        </a>
      }
      . Generally, when you are asked to enable 2FA, you will be provided with
      possible options to do so. We recommend reading the details and choosing
      the most suitable option. 2FA provides an additional level of security,
      making it more difficult for an attacker to break through it.
    </>
  );
};

export const QuestionNineOptionTwo = () => {
  return (
    <>
      <br />
      You may want to reconsider your choice about two-factor authentication
      (2FA). 2FA is a type of multi-factor authentication that requires a user
      to use two methods to verify their identity. This is done for security
      purposes. For example, the first method you can use is providing your
      credentials (e.g., login and password). The second method can be
      represented by using authenticator applications with one-time passcodes
      like{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=LvTg6wAPiJk"
        >
          Duo
        </a>
      }
      . You can also receive a one-time passcode sent to your phone or email.
      Generally, when you are asked to enable 2FA, you will be provided with
      possible options to do so. We recommend reading the details and choosing
      the most suitable option. 2FA provides an additional level of security,
      making it more difficult for an attacker to break through it.
    </>
  );
};
