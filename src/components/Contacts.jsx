import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>snappy</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 73% 12%;
  overflow: hidden;
  background-color: #080420;
  @media (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 71% 14%;
  }
  @media (max-width: 720px) {
    grid-template-rows: 15% 75% 10%;
  }
  /* @media (max-width: 600px) {
    grid-template-rows: 15% 75% 9%;
  } */

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 600px) {
      gap: 0.6rem;
      flex-direction: column;
      padding-top: 0rem;
    }
    img {
      height: 2rem;
      @media (max-width: 600px) {
        height: 2rem;
      }
    }
    h3 {
      color: white;
      text-transform: uppercase;
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;
      overflow: auto;
      @media (max-width: 600px) {
        flex-direction: column;
        gap: 0.4rem;
        min-height: 3.4rem;
      }

      .avatar {
        img {
          height: 3rem;
          @media (max-width: 600px) {
            height: 2rem;
          }
        }
      }
      .username {
        h3 {
          color: white;
          @media (max-width: 600px) {
            font-size: 0.7rem;
          }
        }
      }
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .current-user {
    background-color: #0d0b30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
        @media (max-width: 720px) {
          height: 3rem;
        }
      }
    }
    .username {
      display: none;
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
