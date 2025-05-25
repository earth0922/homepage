
export const MainFrame = ({ children, className }: { children: React.ReactNode; className: string }) => {
    return(
        <>
            <div className={`container mx-auto max-w-full px-10 min-h-screen ${className}`}>
                {children}
            </div>
        </>
    )

}