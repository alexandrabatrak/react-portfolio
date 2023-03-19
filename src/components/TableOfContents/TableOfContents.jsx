import { useState, useEffect, useRef } from "react";
import "./tableofcontents.scss";

function useScrollSpy(ids, options) {
  const [activeId, setActiveId] = useState();
  const observer = useRef();
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [ids, options]);
  return activeId;
}

function useHeadings() {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".subheading"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, []);
  return headings;
}

export default function TableOfContents() {
  const headings = useHeadings();
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    { rootMargin: "0% 0% -25% 0%" }
  );

  // FIXME: the scroll to subheading scroll to previous??? why
  return (
    <nav role='secondary'>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${heading.level}em` }}>
            <a
              className='table-of-contents-link'
              href={`#${heading.id}`}
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
              }}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
