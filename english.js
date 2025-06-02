let devProfile = {
    Hernan:{
        fullName: "Hernán Nahirñak",
        age: 27,
        profession: "Full Stack Developer",
        skills: ["Javascript","Python", "HTML", "CSS" ],
        isEmployed: false,
        contact: {
            email: "hernan.nahiniak@gmail.com",
            location: "Posadas, Misiones, Argentina"
        }
    }
};


function presentation(par1) {
    let employed;
    if (par1.isEmployed === false) {
        employed = "I'm currently looking for new opportunities and open to hearing proposals.";
    } else if (par1.isEmployed === true) {
        employed = "Although I am currently employed, I’m open to exploring new career opportunities.";
    } else {
        employed = "Employment status is not specified.";
    }

    let cleanSkills = Array.isArray(par1.skills)
        ? par1.skills.filter(skill => skill.trim() !== "").join(", ")
        : "various technologies";
     let location = par1.contact?.location || "an unspecified location";

    let presentation = `Hello! My name is ${par1.fullName || "Unknown"}. I am a ${par1.profession || "professional"}.
I work with ${cleanSkills}.
I live in ${location}. I am ${par1.age || "an unspecified"} years old.
${employed}`;

    return presentation;
}
presentation(devProfile.Hernan);
