import axios from "axios";

const githubId = "glowisn";

export async function fetchProjectsSuccess() {
    const res = await axios.get(`https://api.github.com/users/${githubId}/repos?sort=updated`);
    return res.data;
}

let count = 0;

export async function fetchProjectsFailure() {
    if (count <= 3) {
        count++;
        throw new Error("Error");
    }
    const res = await axios.get(`https://api.github.com/users/${githubId}/repos?sort=updated`);
    return res.data;
}

export async function fetchProjectsLoading() {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const res = await axios.get(`https://api.github.com/users/${githubId}/repos?sort=updated`);
    return res.data;
}