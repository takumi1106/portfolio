import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import yaml from "js-yaml";

const worksDirectory = path.join(process.cwd(), "content/works");

export async function getWorkData(slug) {
    const fullPath = path.join(worksDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}

export function getWorksList() {
    const filePath = path.join(process.cwd(), "content/works/index.yaml");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents);
    return data.works || [];
}