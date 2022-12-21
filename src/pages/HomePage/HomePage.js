import * as SC from './Homepage.styled';

export default function HomePage() {
  return (
    <SC.ContainerMain>
      <>
        <SC.HomeTitle>Hi, I’m your phonebook.</SC.HomeTitle>

        <SC.HomeText>
          This app will allow you to store your contacts easily and safely.
        </SC.HomeText>
        <SC.HomeText>
          To save or view your contacts press
          <SC.HomeTextNavLink to="/register">Register</SC.HomeTextNavLink>
          or
          <SC.HomeTextNavLink to="/login">LogIn</SC.HomeTextNavLink>.
        </SC.HomeText>
      </>
    </SC.ContainerMain>
  );
}
