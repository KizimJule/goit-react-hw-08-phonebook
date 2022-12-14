import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { ContainerMain } from './phonebook.styled';

import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export function Phonebook() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerMain>
      {isLoggedIn ? (
        <>
          <Section title="Add contact in your phonebook">
            <ContactForm />
          </Section>
          <Section title="Your contacts">
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
          </Section>
        </>
      ) : (
        <p>Please, enter your account or register </p>
      )}
    </ContainerMain>
  );
}
