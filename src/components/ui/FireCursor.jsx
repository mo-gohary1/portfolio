import { useEffect, useRef } from "react";

const FireCursor = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        const handleMouseMove = (e) => {
            const currentX = e.clientX;
            const currentY = e.clientY;

            // Calculate distance from last position
            const dx = currentX - mouse.current.x;
            const dy = currentY - mouse.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Interpolation: Spawn particles along the path
            // The faster the move, the more steps we take to fill the gap
            const stepCount = Math.max(Math.floor(distance / 5), 1);

            for (let i = 0; i < stepCount; i++) {
                const t = i / stepCount;
                const x = mouse.current.x + dx * t;
                const y = mouse.current.y + dy * t;

                spawnParticle(x, y);
            }

            // Update last position
            mouse.current.x = currentX;
            mouse.current.y = currentY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        function spawnParticle(x, y) {
            particles.current.push({
                x: x || mouse.current.x,
                y: y || mouse.current.y,
                vx: (Math.random() - 0.5) * 1, // Reduced spread for tighter stream
                vy: -Math.random() * 2 - 0.5, // Natural upward drift
                life: 1.0,
                size: Math.random() * 6 + 3,  // Slightly smaller for smoother look
                color: `hsl(${Math.random() * 40 + 10}, 100%, 50%)`
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

            // Update and Draw particles
            particles.current.forEach((p, index) => {
                p.life -= 0.02; // Decrease life
                p.x += p.vx;
                p.y += p.vy;
                p.size *= 0.95; // Shrink

                if (p.life <= 0) {
                    particles.current.splice(index, 1);
                } else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                    // Color logic: Fade from yellow -> orange -> red -> smoke
                    const alpha = p.life;
                    ctx.fillStyle = p.color.replace(")", `, ${alpha})`);
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = p.color;
                    ctx.fill();
                }
            });

            // Constant burn when not moving too (optional, but looks cool)
            if (Math.random() > 0.5) spawnParticle();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-40]"
        />
    );
};

export default FireCursor;
