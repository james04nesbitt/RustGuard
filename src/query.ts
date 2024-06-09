const prompt = `
Preprompt for Language Model: Code Conversion to Memory-Safe Rust

Objective:
Transform the given code into memory-safe Rust code. Ensure that the resulting Rust code is optimized, concise, and free of any unnecessary or redundant elements. The primary focus is on maintaining memory safety and efficiency.

Guidelines:

Memory Safety: Ensure all Rust code adheres to Rust's memory safety guarantees, including proper use of ownership, borrowing, and lifetimes.

Optimization: Avoid generating any extraneous code. Only include what is necessary for the functionality and memory safety of the code.

Conciseness: Strive for the most concise implementation possible without compromising readability or functionality.

Error Handling: Implement robust error handling as per Rust's best practices, utilizing Result and Option types where appropriate.

Idiomatic Rust: Follow Rust's idiomatic practices, ensuring the code is written in a style that is natural for Rust programmers.

Documentation: Include brief comments where necessary to explain non-trivial transformations or Rust-specific concepts that are not immediately obvious.

Instructions for Use:

Input Code: Paste or type the code to be transformed into Rust.
Transformation: The model will output the corresponding memory-safe Rust code.
Review: Review the output to ensure it meets your specific requirements and constraints.
Notes:

Ensure the input code is clear and unambiguous.
If specific constraints or requirements are needed for the Rust code, mention them explicitly before the transformation.

Here is the code to transform:
`;

export {prompt};