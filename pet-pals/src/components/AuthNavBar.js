import React from 'react';
import { Group, Button, Center, Image, Container, Text } from '@mantine/core';
import LogoImage from '../assets/Images/logo_gif.gif';

// Navigation bar component for authentication page
const AuthNavBar = ({ method, toggleMethod }) => {
  return (
    // Navigation bar container with bottom border
    <nav style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
      <Container>
        {/* Centered logo image */}
        <Center>
          <Image src={LogoImage} alt="Logo" height={200} width={200} />
        </Center>

        {/* Slogan text centered below the logo */}
        <Center>
          <Text
            size="sm"
            sx={{
              fontSize: '1rem',
              fontFamily: "'Press Start 2P', cursive",
              color: '#000000',
              marginTop: '0px',
              textAlign: 'center',
            }}
          >
            Where every voice finds peace.
          </Text>
        </Center>

        {/* Centered buttons for Sign In and Register */}
        <Center>
          <Group spacing="sm" position="center" mt="md">
            {/* Sign In button - highlighted if 'signIn' is the active method */}
            <Button
              sx={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                fontFamily: "'Fuzzy Bubbles'",
              }}
              variant={method === 'signIn' ? 'filled' : 'subtle'}
              color="#FFCF9F"
              onClick={() => method === 'signUp' && toggleMethod()}
            >
              Sign In
            </Button>

            {/* Register button - highlighted if 'signUp' is the active method */}
            <Button
              sx={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                fontFamily: "'Fuzzy Bubbles'",
              }}
              variant={method === 'signUp' ? 'filled' : 'subtle'}
              color="#FFCF9F"
              onClick={() => method === 'signIn' && toggleMethod()}
            >
              Register
            </Button>
          </Group>
        </Center>
      </Container>
    </nav>
  );
};

export default AuthNavBar;
