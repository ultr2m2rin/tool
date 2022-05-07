// TODO: move this to some sort of backend

import { ReactNode } from "react";

const QuestionOneTitle =
  "If there is a default password provided for using your device and you are allowed to change it, will you change it?";

const QuestionOneOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> It is recommended to change any default
      passwords to protect your devices and any personal data they may collect,
      store, and use. Default passwords can be easily identified and used by
      attackers to compromise your devices and personal data. Whenever you are
      allowed to change default passwords, it is strongly advised for you to do
      so by many organizations (e.g.,
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

const QuestionOneOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        This choice can compromise your security in the future.
      </h2>{" "}
      It is recommended to change any default passwords to protect your devices
      and any personal data they may collect, store, and use. Default passwords
      can be easily identified and used by attackers to compromise your devices
      and personal data. Whenever you are allowed to change default passwords,
      it is strongly advised for you to do so by many organizations (e.g.,{" "}
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

const QuestionTwoTitle =
  "Will you use blank or null passwords for your device?";

const QuestionTwoOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        This choice can compromise your security in the future.
      </h2>{" "}
      Blank or null passwords pose a big security threat to your devices and
      personal data. In the case of blank or null passwords, an attacker does
      not need to spend any time at all to compromise your device's security. By
      having blank or null passwords, users are leaving the door open for an
      attacker to come in, which is not desirable. You should never have blank
      or null passwords. Your password should be complex enough to protect you
      from attackers.
    </>
  );
};

const QuestionTwoOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Blank or null passwords pose a big
      security threat to your devices and personal data. You should never have
      blank or null passwords.
    </>
  );
};

const QuestionThreeTitle =
  "Will your password be the same as your account name?";

const QuestionThreeOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        This choice can compromise your security in the future.
      </h2>{" "}
      When a password is the same as your account name (or login), it is easy
      for an attacker to compromise your security since they will be able to
      guess it very easily and very fast. Your password should always be
      different from your account name (or login). Your password should be
      complex enough to protect you from attackers.
    </>
  );
};

const QuestionThreeOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Your password should always be different
      from your account name (or login). Your password should be complex enough
      to protect you from attackers.
    </>
  );
};

const QuestionThreeOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        Your password should always be different from your account name (or
        login).
      </h2>{" "}
      When a password is the same as your account name (or login), it is easy
      for an attacker to compromise your security since they will be able to
      guess it very easily and very fast. Your password should be complex enough
      to protect you from attackers.
    </>
  );
};

const QuestionFourTitle =
  "Will your password for your device be at least 12 characters long?";

const QuestionFourOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Long and complex passwords are quite
      difficult to be compromised. The more characters your password contains,
      the more combinations there will be for an attacker to go through before
      they will be able to crack it. This process takes a lot of time and
      computational power. With longer and more complex passwords, the attacker
      will not be able to compromise your security as easily as with simple and
      short passwords.
    </>
  );
};

const QuestionFourOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        This choice can compromise your security in the future.
      </h2>{" "}
      Unlike simple passwords, long and complex ones are quite difficult to be
      compromised. The more characters your password contains, the more
      combinations there will be for an attacker to go through before they will
      be able to crack it. This process takes a lot of time and computational
      power. With longer and more complex passwords, the attacker will not be
      able to compromise your security as easily as with simple and short
      passwords. Your password should be long and complex enough to protect you
      from attackers.
    </>
  );
};

const QuestionFiveTitle =
  "Will you follow any security recommendations when creating your new password?";

const QuestionFiveOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> There are plenty of trustworthy sources
      that provide recommendations on how to create secure passwords. For
      example, you can adhere to recommendations posted by{" "}
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

const QuestionFiveOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">You may want to reconsider this.</h2> Many public and
      private organizations usually have their recommendations on how to create
      secure passwords. For example, you can review recommendations by{" "}
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

const QuestionSixTitle =
  "Will you use any password managers to store the password?";

const QuestionSixOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Password managers allow their users to
      store the passwords in a secure way. Always choose a password manager that
      you can trust, has many good reviews, and functions to meet your needs
      (e.g., it can be a mobile app or a PC app).
    </>
  );
};

const QuestionSixOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">You may want to reconsider this.</h2> It is important
      to store your passwords in a secure place. For example, many people tend
      to write their passwords down on a piece of paper and leave it in a
      visible spot, which poses many security risks. Password managers allow
      their users to store the passwords in a secure way. Always choose a
      password manager that you can trust, has many good reviews, and functions
      to meet your needs (e.g., it can be a mobile app or a PC app).
    </>
  );
};

const QuestionSixOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        It is important to store your passwords in a secure place.
      </h2>{" "}
      For example, many people tend to write their passwords down on a piece of
      paper and leave it in a visible spot, which poses many security risks.
      Password managers allow their users to store the passwords in a secure
      way. Always choose a password manager that you can trust, has many good
      reviews, and functions to meet your needs (e.g., it can be a mobile app or
      a PC app).
    </>
  );
};

const QuestionSevenTitle =
  "Will anyone else who you know be familiar with your password or have access to it?";

const QuestionSevenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">You may want to reconsider this.</h2> It is important
      to store your passwords securely and limit the number of people who can
      access them. Ideally, you should be the only person who knows your
      passwords. However, if some other people must know your password, you
      should be able to trust them and introduce them to best practices
      regarding secure passwords.
    </>
  );
};

const QuestionSevenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> It is important to store your passwords
      securely and limit the number of people who can access them. Ideally, you
      should be the only person who knows your passwords. However, if some other
      people must know your password, you should be able to trust them and
      introduce them to best practices regarding secure passwords.
    </>
  );
};

const QuestionSevenOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        It is important to store your passwords securely and limit the number of
        people who can access them.
      </h2>{" "}
      Ideally, you should be the only person who knows your passwords. However,
      if some other people must know your password, you should be able to trust
      them and introduce them to best practices regarding secure passwords.
    </>
  );
};

const QuestionEightTitle =
  "Were you asked to consider two-factor authentication for controlling your device?";

const QuestionEightOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Proceed to the next question.
    </>
  );
};

const QuestionEightOptionTwo: () => ReactNode = () => {
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

const QuestionEightOptionThree: () => ReactNode = () => {
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

const QuestionNineTitle =
  "Will you enable two-factor authentication for your device?";

const QuestionNineOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Two-factor authentication (2FA) is a type
      of multi-factor authentication that requires a user to use two methods to
      verify their identity. The first method is usually about using your
      credentials (e.g., login and password). The second method is to provide a
      one-time passcode sent to your phone or email or found in a special
      authenticator application like{" "}
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

const QuestionNineOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        You may want to reconsider your choice about two-factor authentication
        (2FA).
      </h2>{" "}
      2FA is a type of multi-factor authentication that requires a user to use
      two methods to verify their identity. This is done for security purposes.
      For example, the first method you can use is providing your credentials
      (e.g., login and password). The second method can be represented by using
      authenticator applications with one-time passcodes like{" "}
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

// Section 2 start

const QuestionTenTitle =
  "Is your device able to send you any notifications related to its performance?";

const QuestionTenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Proceed to the next question.
    </>
  );
};

const QuestionTenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Generally, notifications are used to notify users about any changes,
      updates, or anything that requires users’ attention regarding users’
      devices. Some notifications are related to security and sometimes can
      prevents users from security breaches. For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/accounts/answer/2590353?hl=en"
        >
          Google
        </a>
      }{" "}
      sends security alerts when they detect if someone signs in an account on a
      new device. If an attacker tries to obtain access to your account, it is
      important that you can receive notifications about it and respond
      promptly. Therefore, it is important to have official notifications always
      enabled.
    </>
  );
};

const QuestionTenOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      Generally, notifications are used to notify users about any changes,
      updates, or anything that requires users’ attention regarding users’
      devices. Some notifications are related to security and sometimes can
      prevents users from security breaches. For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/accounts/answer/2590353?hl=en"
        >
          Google
        </a>
      }{" "}
      sends security alerts when they detect if someone signs in an account on a
      new device. If an attacker tries to obtain access to your account, it is
      important that you can receive notifications about it and respond
      promptly. Therefore, it is important to have official notifications always
      enabled.
    </>
  );
};

const QuestionElevenTitle =
  "Do you consider disabling notifications for your device?";

const QuestionElevenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">You may want to reconsider this.</h2> Generally,
      notifications are used to notify users about any changes, updates, or
      anything that requires users’ attention regarding users’ devices. Some
      notifications are related to security and sometimes can prevents users
      from security breaches. For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/accounts/answer/2590353?hl=en"
        >
          Google
        </a>
      }{" "}
      sends security alerts when they detect if someone signs in an account on a
      new device. If an attacker tries to obtain access to your account, it is
      important that you can receive notifications about it and respond
      promptly. Therefore, it is important to have official notifications always
      enabled.
    </>
  );
};

const QuestionElevenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Generally, notifications are used to
      notify users about any changes, updates, or anything that requires users’
      attention regarding users’ devices. Some notifications are related to
      security and sometimes can prevents users from security breaches. For
      example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/accounts/answer/2590353?hl=en"
        >
          Google
        </a>
      }{" "}
      sends security alerts when they detect if someone signs in an account on a
      new device. If an attacker tries to obtain access to your account, it is
      important that you can receive notifications about it and respond
      promptly. Therefore, it is important to have official notifications always
      enabled.
    </>
  );
};

const QuestionTwelveTitle =
  "Does your device collect, use, and store your personal information?";

const QuestionTwelveOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Proceed to the next question.
    </>
  );
};

const QuestionTwelveOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices may need to collect user’s personal information to operate.
      For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Learning Thermostat
        </a>
      }{" "}
      collects setup information provided by users as well as technical
      information from the device, environmental data from thermostat’s sensors,
      and other types of data.{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Cam
        </a>
      }{" "}
      collects video and audio signals and data along with other types of data.
      It is important to know if your device collects any type of your personal
      information to be able to control the settings (e.g., you can enable audio
      recordings but disable video recordings if you wish) or at least be aware
      of the use of your personal data. We recommend referring to official data
      privacy statements published by device’s manufacturers to learn about
      types of data collected by your devices.
    </>
  );
};

const QuestionTwelveOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices may need to collect user’s personal information to operate.
      For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Learning Thermostat
        </a>
      }{" "}
      collects setup information provided by users as well as technical
      information from the device, environmental data from thermostat’s sensors,
      and other types of data.{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Cam
        </a>
      }{" "}
      collects video and audio signals and data along with other types of data.
      It is important to know if your device collects any type of your personal
      information to be able to control the settings (e.g., you can enable audio
      recordings but disable video recordings if you wish) or at least be aware
      of the use of your personal data. When you are not sure if your device
      collects any personal data, we recommend referring to official data
      privacy statements published by device’s manufacturers.
    </>
  );
};

const QuestionThirteenTitle =
  "Do you know what kind of information your device collects, uses, and stores?";

const QuestionThirteenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> It is important to know if your device
      collects any type of your personal information to be able to control the
      settings (e.g., you can enable audio recordings but disable video
      recordings if you wish) or at least be aware of the use of your personal
      data. We recommend referring to official data privacy statements published
      by device’s manufacturers to learn about types of data collected by your
      devices.
    </>
  );
};

const QuestionThirteenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        This choice can compromise your security in the future.
      </h2>{" "}
      Some devices may need to collect user’s personal information to operate.
      For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Learning Thermostat
        </a>
      }{" "}
      collects setup information provided by users as well as technical
      information from the device, environmental data from thermostat’s sensors,
      and other types of data.{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Cam
        </a>
      }{" "}
      collects video and audio signals and data along with other types of data.
      It is important to know what kind of data your device collects to be able
      to control the settings (e.g., you can enable audio recordings but disable
      video recordings if you wish) or at least be aware of the use of your
      personal data. We recommend referring to official data privacy statements
      published by device’s manufacturers to learn about types of data collected
      by your devices.
    </>
  );
};

const QuestionFourteenTitle =
  "Is your device capable of recording audio/visual or any other type of data?";

const QuestionFourteenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Proceed to the next question.
    </>
  );
};

const QuestionFourteenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices may need to record user’s audio and video data to operate.
      For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Cam
        </a>
      }{" "}
      collects video and audio signals and data along with other types of data.
      It is important to know what kind of data your device collects to be able
      to control the settings (e.g., you can enable audio recordings but disable
      video recordings if you wish) or at least be aware of the use of your
      personal data.
    </>
  );
};

const QuestionFourteenOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices may need to record user’s audio and video data to operate.
      For example,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nest.com/ca/legal/privacy-statement-for-nest-products-and-services/"
        >
          Nest Cam
        </a>
      }{" "}
      collects video and audio signals and data along with other types of data.
      It is important to know what kind of data your device collects to be able
      to control the settings (e.g., you can enable audio recordings but disable
      video recordings if you wish) or at least be aware of the use of your
      personal data. We recommend referring to official data privacy statements
      published by device’s manufacturers to learn about types of data collected
      by your devices.
    </>
  );
};

const QuestionFifteenTitle =
  "Will you allow your device to record audio/visual or any other type of data?";

const QuestionFifteenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      For some devices, it is necessary to be able to record audio and/or video
      data to operate. You should always know if you allow your device to record
      your audio and/or video data. You should also know how to disable these
      features if needed and possible. We recommend referring to official
      guidelines published by device’s manufacturers to learn about the features
      of your devices and how you can control them.
    </>
  );
};

const QuestionFifteenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      For some devices, it is necessary to be able to record audio and/or video
      data to operate. You should always know if you allow your device to record
      your audio and/or video data. You should also know how to disable these
      features if needed and possible. We recommend referring to official
      guidelines published by device’s manufacturers to learn about the features
      of your devices and how you can control them.
    </>
  );
};

const QuestionSixteenTitle =
  "Can you access information about your device’s data protection?";

const QuestionSixteenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> It is important to know how the data from
      your device is being protected since the awareness may allow you to choose
      what kind of data you are willing to share. We recommend referring to
      official guidelines published by device’s manufacturers to learn about
      their data protection policies.
    </>
  );
};

const QuestionSixteenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        It is important to know how the data from your device is being
        protected.
      </h2>{" "}
      The awareness may allow you to choose what kind of data you are willing to
      share. We strongly recommend referring to official guidelines published by
      device’s manufacturers to learn about their data protection policies.
    </>
  );
};

const QuestionSeventeenTitle =
  "Can your device share any of your personal data with third parties?";

const QuestionSeventeenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Proceed to the next question.
    </>
  );
};

const QuestionSeventeenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices need to share the collected data with third parties for
      performance reviews, data analysis, feature functioning, and many more
      reasons. It is important to know what kind of data you agree to share and
      with whom if you are asked to allow the access of your data to companies
      other than the manufacturer. We recommend reading privacy and security
      statements provided regarding third-party data sharing.
    </>
  );
};

const QuestionSeventeenOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices need to share the collected data with third parties for
      performance reviews, data analysis, feature functioning, and many more
      reasons. It is important to know what kind of data you agree to share and
      with whom if you are asked to allow the access of your data to companies
      other than the manufacturer. We recommend reading privacy and security
      statements provided regarding third-party data sharing.
    </>
  );
};

const QuestionEighteenTitle =
  "Will you allow your device to share your personal data with third parties?";

const QuestionEighteenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices need to share the collected data with third parties for
      performance reviews, data analysis, feature functioning, and many more
      reasons. It is important to know what kind of data you agree to share and
      with whom if you are asked to allow the access of your data to companies
      other than the manufacturer. We recommend reading privacy and security
      statements provided regarding third-party data sharing.
    </>
  );
};

const QuestionEighteenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices need to share the collected data with third parties for
      performance reviews, data analysis, feature functioning, and many more
      reasons. We recommend reading privacy and security statements provided
      regarding third-party data sharing.
    </>
  );
};

const QuestionNineteenTitle =
  "Do you know what kind of personal data you may share and with whom?";

const QuestionNineteenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Remember, it is important to know what
      kind of data you agree to share and with whom if you are asked to allow
      the access of your data to companies other than the manufacturer.
    </>
  );
};

const QuestionNineteenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">You may want to learn more about it.</h2> Remember, it
      is important to know what kind of data you agree to share and with whom if
      you are asked to allow the access of your data to companies other than the
      manufacturer.
    </>
  );
};

// Section 3 start

const QuestionTwentyTitle =
  "Can you access information about your device’s capabilities?";

const QuestionTwentyOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> It is important to know your device’s
      features and details about them. When you understand what your device is
      capable of, you have more chances to protect it efficiently.
    </>
  );
};

const QuestionTwentyOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">We recommend searching for this information.</h2> It
      is important to know your device’s features and details about them. When
      you understand what your device is capable of, you have more chances to
      protect it efficiently.
    </>
  );
};

const QuestionTwentyoneTitle =
  "Do you know the duration and end-of-life security and support of your devices?";

const QuestionTwentyoneOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Remember, with end-of-life technology your
      device will stop receiving automatic security updates and vulnerabilities
      will not be fixed anymore. Therefore, it is important to be aware of the
      date when this happens.
    </>
  );
};

const QuestionTwentyoneOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">You may want to search for this information.</h2>
      Remember, with end-of-life technology your device will stop receiving
      automatic security updates and vulnerabilities will not be fixed anymore.
      Your device can become an easy target for attackers. Therefore, it is
      important to be aware of the date when this happens.
    </>
  );
};

const QuestionTwentytwoTitle =
  "Do you need to connect your device to your Wi-Fi network at home?";

const QuestionTwentytwoOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Remember to connect your device only to a network you can trust (e.g.,
      your home network). Follow official guidelines on how to connect your
      device to a Wi-Fi network published by device’s manufacturer.
    </>
  );
};

const QuestionTwentytwoOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices need to be connected to a Wi-Fi network. Remember, if your
      device needs to use a Wi-Fi connection, connect it only to a network you
      can trust.
    </>
  );
};

const QuestionTwentythreeTitle = "Does your device support guest accounts?";

const QuestionTwentythreeOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Proceed to the next question.
    </>
  );
};

const QuestionTwentythreeOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices may offer features to add guest accounts. For example, some
      smart door locks can be controlled by main permanent owners as well as
      temporary guests. It is important to only let trusted people use your
      smart home devices and revoke access as soon as it is not required.
    </>
  );
};

const QuestionTwentythreeOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      Some devices may offer features to add guest accounts. For example, some
      smart door locks can be controlled by main permanent owners as well as
      temporary guests. It is important to only let trusted people use your
      smart home devices and revoke access as soon as it is not required. We
      recommend reading official guidelines provided by your device’s
      manufacturer to understand if you can add guest accounts to your device.
    </>
  );
};

const QuestionTwentyfourTitle =
  "Will you consider adding any quest account to your device?";

const QuestionTwentyfourOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Remember to only let trusted people use your smart home devices and revoke
      access as soon as it is not required.
    </>
  );
};

const QuestionTwentyfourOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      If you ever change your mind, remember to only let trusted people use your
      smart home devices and revoke access as soon as it is not required.
    </>
  );
};

const QuestionTwentyfiveTitle =
  "Is your device physically protected (e.g., it is not visible from the outside of your home)?";

const QuestionTwentyfiveOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Remember, some devices can be abused by
      attackers if they are visible in your home (e.g.,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wired.com/story/lasers-hack-amazon-echo-google-home/"
        >
          this
        </a>
      }{" "}
      article discusses how Google Home or Amazon Alexa can be affected by
      lasers) or can be easily physically accessible (e.g., smart locks or smart
      thermostats).
    </>
  );
};

const QuestionTwentyfiveOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">
        We recommend physically protecting your devices if needed.
      </h2>{" "}
      Remember, some devices can be abused by attackers if they are visible in
      your home (e.g.,{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wired.com/story/lasers-hack-amazon-echo-google-home/"
        >
          this
        </a>
      }{" "}
      article discusses how Google Home or Amazon Alexa can be affected by
      lasers) or can be easily physically accessible (e.g., smart locks or smart
      thermostats).
    </>
  );
};

const QuestionTwentysixTitle =
  "Do you know your device’s model and serial number?";

const QuestionTwentysixOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Make sure you can always access this
      information if needed. When you know your device’s model and serial number
      you can find relevant instructions for it much faster and easier.
    </>
  );
};

const QuestionTwentysixOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">We recommend searching for this information.</h2> You
      can try looking for it in the packaging for your device or somewhere
      directly on your device. Make sure you can always access this information
      if needed. When you know your device’s model and serial number you can
      find relevant instructions for it much faster and easier.
    </>
  );
};

const QuestionTwentysevenTitle =
  "Do you have information on how to maintain your device?";

const QuestionTwentysevenOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="good">Good!</h2> Remember to refer to official information
      provided by trustworthy sources like manufacturers and service providers.
      For example, on this official{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.ca/gp/help/customer/display.html?nodeId=GPGRYRZ494GDFPZ2"
        >
          webpage
        </a>
      }{" "}
      administered by Amazon you can find information about managing Alexa
      Privacy Settings.
    </>
  );
};

const QuestionTwentysevenOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      <h2 className="bad">We recommend searching for this information.</h2>
      Manufacturers usually publish their guidelines and pieces of advice on how
      to use your device and maintain its security. Please, refer to official
      information provided by trustworthy sources like manufacturers and service
      providers. For example, on this official{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.ca/gp/help/customer/display.html?nodeId=GPGRYRZ494GDFPZ2"
        >
          webpage
        </a>
      }{" "}
      administered by Amazon you can find information about managing Alexa
      Privacy Settings.
    </>
  );
};

const QuestionTwentyeightTitle =
  "Were you provided with guidance on how to securely set up a device?";

const QuestionTwentyeightOptionOne: () => ReactNode = () => {
  return (
    <>
      <br />
      Good! Please follow the official instructions provided to you.
    </>
  );
};

const QuestionTwentyeightOptionTwo: () => ReactNode = () => {
  return (
    <>
      <br />
      We recommend searching for this information. Usually, manufacturers and
      service providers publish their official guidelines on the Internet.
      Please, refer only to trusted sources to set up your device’s security.
      This{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wikihow.com/Find-if-a-Website-Is-Legitimate"
        >
          article
        </a>
      }{" "}
      published by WikiHow explains how you can find if a website is legitimate.
    </>
  );
};

const QuestionTwentyeightOptionThree: () => ReactNode = () => {
  return (
    <>
      <br />
      We recommend searching for this information. Usually, manufacturers and
      service providers publish their official guidelines on the Internet.
      Please, refer only to trusted sources to set up your device’s security.
      This{" "}
      {
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wikihow.com/Find-if-a-Website-Is-Legitimate"
        >
          article
        </a>
      }{" "}
      published by WikiHow explains how you can find if a website is legitimate.
    </>
  );
};

export interface Weight {
  yes: number;
  no: number;
  indeterminate?: number;
}

export interface Questions {
  question: string;
  recommendations: (() => ReactNode)[];
  recommendationThreeButtonContent?: string;
  weight?: Weight;
}

export const questions: Questions[] = [
  {
    question: QuestionOneTitle,
    recommendations: [QuestionOneOptionOne, QuestionOneOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionTwoTitle,
    recommendations: [QuestionTwoOptionOne, QuestionTwoOptionTwo],
    weight: { yes: 0, no: 1 },
  },
  {
    question: QuestionThreeTitle,
    recommendations: [
      QuestionThreeOptionOne,
      QuestionThreeOptionTwo,
      QuestionThreeOptionThree,
    ],
    recommendationThreeButtonContent: "Prefer not to answer",
    weight: { yes: 0, no: 1, indeterminate: 0 },
  },
  {
    question: QuestionFourTitle,
    recommendations: [QuestionFourOptionOne, QuestionFourOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionFiveTitle,
    recommendations: [QuestionFiveOptionOne, QuestionFiveOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionSixTitle,
    recommendations: [
      QuestionSixOptionOne,
      QuestionSixOptionTwo,
      QuestionSixOptionThree,
    ],
    recommendationThreeButtonContent: "I am not familiar with these",
    weight: { yes: 1, no: 0, indeterminate: 0 },
  },
  {
    question: QuestionSevenTitle,
    recommendations: [
      QuestionSevenOptionOne,
      QuestionSevenOptionTwo,
      QuestionSevenOptionThree,
    ],
    recommendationThreeButtonContent: "Prefer not to answer",
    weight: { yes: 0, no: 1, indeterminate: 0 },
  },
  {
    question: QuestionEightTitle,
    recommendations: [
      QuestionEightOptionOne,
      QuestionEightOptionTwo,
      QuestionEightOptionThree,
    ],
    recommendationThreeButtonContent: "Not applicable",
  },
  {
    question: QuestionNineTitle,
    recommendations: [QuestionNineOptionOne, QuestionNineOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  // section 2 questions indexes 9-18
  {
    question: QuestionTenTitle,
    recommendations: [
      QuestionTenOptionOne,
      QuestionTenOptionTwo,
      QuestionTenOptionThree,
    ],
    recommendationThreeButtonContent: "I am not sure",
  },
  {
    question: QuestionElevenTitle,
    recommendations: [QuestionElevenOptionOne, QuestionElevenOptionTwo],
    weight: { yes: 0, no: 1 },
  },
  {
    question: QuestionTwelveTitle,
    recommendations: [QuestionTwelveOptionOne, QuestionTwelveOptionThree],
    recommendationThreeButtonContent: "I am not sure",
  },
  {
    question: QuestionThirteenTitle,
    recommendations: [QuestionThirteenOptionOne, QuestionThirteenOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionFourteenTitle,
    recommendations: [
      QuestionFourteenOptionOne,
      QuestionFourteenOptionTwo,
      QuestionFourteenOptionThree,
    ],
    recommendationThreeButtonContent: "I am not sure",
  },
  {
    question: QuestionFifteenTitle,
    recommendations: [QuestionFifteenOptionOne, QuestionFifteenOptionTwo],
  },
  {
    question: QuestionSixteenTitle,
    recommendations: [QuestionSixteenOptionOne, QuestionSixteenOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionSeventeenTitle,
    recommendations: [
      QuestionSeventeenOptionOne,
      QuestionSeventeenOptionTwo,
      QuestionSeventeenOptionThree,
    ],
    recommendationThreeButtonContent: "I am not sure",
  },
  {
    question: QuestionEighteenTitle,
    recommendations: [QuestionEighteenOptionOne, QuestionEighteenOptionTwo],
  },
  {
    question: QuestionNineteenTitle,
    recommendations: [QuestionNineteenOptionOne, QuestionNineteenOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  // section 3 questions indexes 19-27
  {
    question: QuestionTwentyTitle,
    recommendations: [QuestionTwentyOptionOne, QuestionTwentyOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionTwentyoneTitle,
    recommendations: [QuestionTwentyoneOptionOne, QuestionTwentyoneOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionTwentytwoTitle,
    recommendations: [QuestionTwentytwoOptionOne, QuestionTwentytwoOptionTwo],
  },
  {
    question: QuestionTwentythreeTitle,
    recommendations: [
      QuestionTwentythreeOptionOne,
      QuestionTwentythreeOptionTwo,
      QuestionTwentythreeOptionThree,
    ],
    recommendationThreeButtonContent: "I am not sure",
  },
  {
    question: QuestionTwentyfourTitle,
    recommendations: [QuestionTwentyfourOptionOne, QuestionTwentyfourOptionTwo],
  },
  {
    question: QuestionTwentyfiveTitle,
    recommendations: [QuestionTwentyfiveOptionOne, QuestionTwentyfiveOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionTwentysixTitle,
    recommendations: [QuestionTwentysixOptionOne, QuestionTwentysixOptionTwo],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionTwentysevenTitle,
    recommendations: [
      QuestionTwentysevenOptionOne,
      QuestionTwentysevenOptionTwo,
    ],
    weight: { yes: 1, no: 0 },
  },
  {
    question: QuestionTwentyeightTitle,
    recommendations: [
      QuestionTwentyeightOptionOne,
      QuestionTwentyeightOptionTwo,
      QuestionTwentyeightOptionThree,
    ],
    recommendationThreeButtonContent: "I am not sure",
  },
];
