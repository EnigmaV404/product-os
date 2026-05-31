export function splitParagraphs(content: string) {
  return content
    .trim()
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function getConnectedIds(
  id: string,
  edges: readonly (readonly [string, string])[]
) {
  const connected = new Set<string>([id]);

  edges.forEach(([source, target]) => {
    if (source === id) connected.add(target);
    if (target === id) connected.add(source);
  });

  return connected;
}

export function safeMailto(email: string) {
  return email.includes("@") ? `mailto:${email}` : "#contact";
}
