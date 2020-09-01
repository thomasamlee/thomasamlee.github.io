import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const {
    firstName,
    lastName,
    occupation,
    email,
    github,
    linkedin,
    resume,
    author,
  } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  const { toString } = useContext(ThemeContext)

  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          rounded
          width="150"
          height="150"
          src={`../../icons/luke-${toString()}.png`}
          alt={author}
        />

        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Imperial enforcer by night.` : `Rebel scum by night.`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />

        <p className="unemployed">
          <small>Let's get in touch!</small>
        </p>
        <div className="d-md-inline-flex icons-container">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        lastName
        occupation
        email
        github
        linkedin
        occupation
        resume
        author
      }
    }
  }
`
