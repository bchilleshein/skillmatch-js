const candidateProfile = {
    name: "Bianca Carolina Hilleshein",
    interestArea: "Desenvolvimento Front-End",
    experienceTime: "6 meses",
    skills: [
        "SQL", "Power BI", "dbt", "Databricks", "Noção de Banco de Dados", "Git/GitHub", "Lógica de Programação", "ETL"
    ]
};

const jobOpenings = [
    { 
        company: "Tech Solutions",
        position: "Desenvolvedor Front-End Júnior",
        modality: "Híbrido",
        requirements: [
            "Lógica de Programação", "HTML5", "CSS3", "JavaScript ES6", "Git/GitHub", "CSS Responsive (Flexbox/Grid)"
        ]
    },
    { 
        company: "Dev Studios",
        position: "Desenvolvedor React Júnior",
        modality: "Home Office",
        requirements: [
            "JavaScript ES6", "React", "HTML5", "CSS3", "Consumo de APIs REST (Fetch/Async-Await)", "Git/GitHub"
        ]
    },
    { 
        company: "CodeFront",
        position: "Desenvolvedor Front-End Web Júnior",
        modality: "Híbrido",
        requirements: [ 
            "HTML5", "CSS3", "JavaScript ES6", "TypeScript", "Git/GitHub", "Tailwind CSS", "Testes Unitários (Jest)" 
        ]
    } 
];

const studyRecommendationsLinks = {
    "JavaScript ES6": "https://www.freecodecamp.org/learn/javascript-v9/",
    "HTML5": "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    "CSS3": "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    "React": "https://react.dev/learn",
    "TypeScript": "https://www.typescriptlang.org/docs/",
    "CSS Responsive (Flexbox/Grid)": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "Consumo de APIs REST (Fetch/Async-Await)": "https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch",
    "Tailwind CSS": "https://tailwindcss.com/docs",
    "Testes Unitários (Jest)": "https://jestjs.io/docs/getting-started"
};

class Job {
    constructor(jobData) {
        this.company = jobData.company;
        this.position = jobData.position;
        this.requirements = jobData.requirements;
    }

    jobDetails() {
        return `${this.position} na empresa ${this.company}`;
    }

    missingSkills(candidateSkills) {
        return this.requirements.filter(
            (req) => !candidateSkills.some((skill) => skill === req)
        );
    }
}

class TechJob extends Job {
    constructor(jobData) {
        super(jobData);
        this.modality = jobData.modality || "Presencial";
    }

    jobDetails() {
        return `${super.jobDetails()} [Modalidade: ${this.modality}]`;
    }
}

function createJobCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

function processJobReport(job, candidateSkills, callback) {
    const missing = job.missingSkills(candidateSkills);
    const totalReqs = job.requirements.length;
    const matchCount = totalReqs - missing.length;
    const matchPercentage = Math.round((matchCount / totalReqs) * 100);

    let classification = "";
    if (matchPercentage >= 80) {
        classification = "Alta compatibilidade";
    } else if (matchPercentage >= 50) {
        classification = "Média compatibilidade";
    } else {
        classification = "Baixa compatibilidade";
    }

    const result = { job, matchPercentage, classification, missing };

    if (typeof callback === "function") {
        callback(result);
    }

    return result;
}

function studyRecommendation(analyzedJobs) {
    const allMissing = analyzedJobs.flatMap((report) => report.missing);

    if (allMissing.length === 0) {
        return "O candidato(a) já possui todos os requisitos das vagas analisadas.";
    }

    const frequencyMap = {};
    allMissing.forEach((skill) => {
        frequencyMap[skill] = (frequencyMap[skill] || 0) + 1;
    });

    let maxCount = 0;
    for (const skill in frequencyMap) {
        if (frequencyMap[skill] > maxCount) {
            maxCount = frequencyMap[skill];
        }
    }

    const topSkills = [];
    for (const skill in frequencyMap) {
        if (frequencyMap[skill] === maxCount) {
            topSkills.push(skill);
        }
    }

    let prioritySkill = "";
    if (topSkills.includes("JavaScript ES6")) {
        prioritySkill = "JavaScript ES6";
    } else {
        prioritySkill = topSkills[0];
    }

    const link = studyRecommendationsLinks[prioritySkill] || "Sugere-se a consulta à documentação oficial da tecnologia.";
    
    return `Para acelerar a carreira do candidato(a), sugere-se o estudo de ${prioritySkill}: ${link}.`;
}

function loadJobs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!jobOpenings || jobOpenings.length === 0) {
                reject("Nenhuma vaga encontrada no banco de dados.");
            } else {
                resolve(jobOpenings); 
            }
        }, 5000);
    });
}