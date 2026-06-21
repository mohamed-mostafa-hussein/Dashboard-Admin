import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Stack } from "@mui/material";
import Information from "../../components/Information";

function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  // @ts-ignore
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack direction={"column"} sx={{ gap: 2 }}>
      <Information title={"faq"} subTitle={""} />
      <Accordion
        // @ts-ignore
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            About Me
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Front-End Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My name is Mohamed Mostafa. I am currently learning Front-End
            Development and focusing on React.js and Material UI.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Skills
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Technologies I use
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            HTML, CSS, JavaScript, React.js, Material UI, Git, GitHub,
            Responsive Design.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Projects
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            My recent work
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Built an E-Commerce website using HTML, CSS and JavaScript with
            Local Storage and Shopping Cart functionality. Also developed an
            Admin Dashboard using React and Material UI.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Goals
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My goal is to become a professional Front-End Developer, build
            strong React projects, and get my first job in web development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // @ts-ignore
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Education
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Academic background
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently pursuing my studies while focusing on Front-End
            Development and building real-world projects using modern web
            technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Learning Journey
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            What I'm learning now
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently improving my React.js skills, learning Material UI deeply,
            practicing React Router, state management, and building responsive
            applications.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Contact Information
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Get in touch with me
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <strong>GitHub:</strong> mohamed-mostafa-hussein
          </Typography>

          <Typography>
            <strong>LinkedIn:</strong> Mohamed Mostafa
          </Typography>

          <Typography>
            <strong>Email:</strong> mohamedmostafahussein@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default Faq;
