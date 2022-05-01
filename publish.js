import ghpages from "gh-pages";

ghpages.publish(
    "docs",
    {
        dest: "/docs",
        branch: "master",
        repo: "https://github.com/kudadam/flames-game.git",
        user: {
            name: "Lucretius Biah",
            email: "lucretiusbiah@protonmail.com"
        },
        dotfiles: true
    }
)