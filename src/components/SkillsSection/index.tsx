import styles from './styles.module.scss'

type Props = {}

const SkillsSection = () => {
  const skills = [
    {
      title: "Linguagens",
      skills: [
        {
          name: "Javascript",
          level: 4
        },
        {
          name: "HTML",
          level: 4
        },
        {
          name: "CSS",
          level: 4
        },
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        {
          name: "Git",
          level: 4
        },
        {
          name: "Github",
          level: 4
        },
        {
          name: "Figma",
          level: 4
        },
        {
          name: "Vs Code",
          level: 4
        },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "Typescript",
          level: 3
        },
        {
          name: "React",
          level: 4
        },
        {
          name: "Node.js",
          level: 3
        },
        {
          name: "Next.js",
          level: 3
        },
        {
          name: "React Native",
          level: 3
        },
        {
          name: "Sass",
          level: 3
        }
      ]
    },
    {
      title: "Banco de Dados",
      skills: [
        {
          name: "Mongo",
          level: 3
        },
        {
          name: "PostgreSQL",
          level: 4
        },
        {
          name: "SQLite",
          level: 4
        }
      ]
    }
  ]
  const maxLevel = [1, 2, 3, 4, 5]

  return (
    <section className={styles.skillsSection}>
      <strong>Habilidades</strong>
      <h1>Principais skills</h1>

      <main>
        {skills.map(item => (
          <div key={item.title} className={styles.skillsContainer}>
            <strong>{item.title}</strong>

            <div className={styles.skills}>
              {item.skills.map(skill => (
                <div key={skill.name} className={styles.skill}>
                  <span>{skill.name}</span>
                  
                  {maxLevel.map((level) => {
                    if(level <= skill.level) {
                      return <div key={level} className={styles.skillLevel} />
                    } else {
                      return <div key={level} className={styles.level} />
                    }
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </section>
  )
}

export default SkillsSection