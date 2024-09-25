
export const simpleRequestHandler = async (values: any) => {
    const result = await fetch("/api/contact", {method: "POST", body: JSON.stringify(values)});
    return await result.json();
}


