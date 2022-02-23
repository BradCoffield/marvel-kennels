import PageHeading from "../components/PageHeading";
import styled from "styled-components";

let AboutImage = styled.img`
float:right;
width: 330px;margin: 1rem 2rem 2rem 2rem;
/* background-color: blue; */
/* padding:2rem; */
box-shadow: 1px 1px 15px #333;
`

export default function About() {
  return (
    <>
      <PageHeading
        content={"About"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-04.png"}
      />
      <div>
        <AboutImage
          alt="Ashley Kunsa"
          src="https://wta9-v1.netlify.app/images/Ashley%20K%20headshot.JPG"
        />
        <p>
          Ashley Kunsa is a writer, teacher, and Pittsburgh native whose poetry,
          short fiction, and nonfiction can be found in a variety of print and
          online publications including The Writer magazine, Blue Mesa Review,
          Bennington Review, and The Forge. Her work has received prizes from
          the A Room of Her Own Foundation and Eastern Iowa Review. She holds an
          MFA from Penn State University and a PhD from Duquesne University and
          is currently assistant professor of creative writing at Rocky Mountain
          College in Billings, MT.
        </p>

    
 
      </div>
    </>
  );
}
