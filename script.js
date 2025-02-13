    function moveNoButton() {
        const noButton = document.querySelector('.no-button');
        const container = document.querySelector('.container');

        // Get container dimensions (bounding box to be precise)
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // Get container paddings
        const containerStyles = window.getComputedStyle(container);
        const containerPaddingTop = parseInt(containerStyles.paddingTop) || 0;
        const containerPaddingBottom = parseInt(containerStyles.paddingBottom) || 0;
        const containerPaddingLeft = parseInt(containerStyles.paddingLeft) || 0;
        const containerPaddingRight = parseInt(containerStyles.paddingRight) || 0;

        // Calculate available space
        const maxX = containerRect.width - noButtonRect.width - containerPaddingRight - 10;
        const maxY = containerRect.height - noButtonRect.height - containerPaddingBottom - 10;

        // Generate random position within bounds
        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        // Ensure position does not overflow
        x = Math.max(10, Math.min(x, maxX));
        y = Math.max(100, Math.min(y, maxY));

        // Apply new position
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        // Slightly shrink the button to make it harder to click
        noButton.style.transform = "scale(0.9)";

        // Restore size after a short delay
        setTimeout(() => {
            noButton.style.transform = "scale(1)";
        }, 500);

        // Funny rejection messages
        const messages = [
            "Are you sure baby? 😢",
            "babyy huhuhu",
            "hindi mo po ba ko lab huhuh 😭😭💔",
            "baby please huhuhu 😭",
            "huhuhuh 😭",
            "Give me a chance pu baby 🥹😭",
            "baby, bigyan pu kita ng kiss 🍫😭",
            "I'll be so ! 💔"
        ];

        // Create a message bubble
        const message = document.createElement("div");
        message.classList.add("funny-message");
        message.innerText = messages[Math.floor(Math.random() * messages.length)];
        container.appendChild(message);

        // Remove message after a short delay
        setTimeout(() => {
            message.remove();
        }, 1500);
    }



    function handleYesClick() {
        document.body.classList.add("glow-effect");
    
        // Use setTimeout for visual effect and ensure redirection happens reliably
        setTimeout(() => {
            location.replace("yes_page.html");
        }, 300);
        
    }
    



