import React from 'react';
import { Group, Button, Center, Image, Container, Text } from '@mantine/core';
import LogoImage from '../assets/Images/logo_gif.gif';

const AuthNavBar = ({ method, toggleMethod }) => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
      <Container style={{ maxWidth: '100%', padding: '0', margin: '0 auto' }}>
        <Center>
          <Image src={LogoImage} alt="Logo" height={200} width={200} />
        </Center>
        <Center style={{ marginTop: '0px' }}>
          <Text
            style={{
              fontSize: '1rem', // Fixed font size
              fontFamily: "'Press Start 2P', cursive",
              color: '#000000',
              textAlign: 'center',
              whiteSpace: 'nowrap', // Prevent wrapping by default
              overflow: 'visible',
            }}
            className="slogan-text"
          >
            Where every voice finds peace.
          </Text>
        </Center>
        <Center>
          <Group spacing="sm" position="center" mt="md">
            <Button
              style={{
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
            <Button
              style={{
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
      <style jsx>{`
      `}</style>
    </nav>
  );
};

export default AuthNavBar;
