import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../assets/Images/logo.png';
import { useAuth } from '../util/AuthContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Image } from '@mantine/core';
import coin from "../assets/Images/coin.png";

const HomeNavBar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        try {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5px 40px',
      backgroundColor: '#FFCF9F',
      fontSize: '16px',
      position: 'fixed',
      width: '100%',
      zIndex: 100,
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      backgroundColor: 'white',
      marginRight: '20px',
    },
    logoImage: {
      width: '70px',
      height: 'auto',
    },
    link: {
      margin: '0 15px',
      color: 'black',
      textDecoration: 'none',
      fontSize: '16px',
    },
    active: {
      color: '#FFFAC3',
    },
    navGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    logoutButton: {
      padding: '8px 16px',
      backgroundColor: '#FF6B6B',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '16px',
      fontFamily: 'inherit',
      transition: 'background-color 0.3s ease',
    },
    logoutButtonHover: {
      backgroundColor: '#FF5252',
    },
    // New styles for user info
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    userStats: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: '8px 16px',
      borderRadius: '20px',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '4px 12px',
      borderRadius: '15px',
      fontSize: '14px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    username: {
      fontWeight: 'bold',
      color: '#4A5568',
      fontSize: '16px',
    },
    coinIcon: {
      color: '#FFD700',
      fontSize: '18px',
    },
    levelBadge: {
      backgroundColor: '#4A5568',
      color: 'white',
      padding: '2px 8px',
      borderRadius: '10px',
      fontSize: '12px',
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navGroup}>
        <Link to="/home" style={styles.logoContainer}>
          <img src={LogoImage} alt="Logo" style={styles.logoImage} />
        </Link>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/community" style={styles.link}>Community</Link>
        <Link to="/journal" style={styles.link}>Journal</Link>
      </div>

      <div style={styles.userInfo}>
        {userData && (
          <div style={styles.userStats}>
            <span style={styles.username}>{userData.username || "User"}</span>
            <div style={styles.statItem}>
              <span style={styles.coinIcon}><Image src={coin}></Image></span>
              <span>{userData.coins || 0}</span>
            </div>
            <div style={styles.statItem}>
              <span>Level</span>
              <span style={styles.levelBadge}>{userData.level || 1}</span>
            </div>
            <div style={styles.statItem}>
              <span>XP</span>
              <span>{userData.xp || 0}</span>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          style={styles.logoutButton}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = styles.logoutButtonHover.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = styles.logoutButton.backgroundColor;
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default HomeNavBar;