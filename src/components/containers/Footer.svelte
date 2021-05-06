<script>
    const date = new Date();
    const year = date.getFullYear();
</script>

<footer>
    <p>
        plannings-arcsdeseine &copy; {year}
    </p>
    <p>
        <a href="https://github.com/Fabezio/sapper-plannings" target="_blank">
            code source
        </a>
    </p>
</footer>

<style>
    a {
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
        color: inherit;
        background: whitesmoke;
        text-decoration: none;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
    }
    a:hover {
        background: rgba(0, 0, 0, 0.15);
        text-shadow: 1px 1px rgba(0, 0, 0, 0.2);

        color: white;
    }
    footer {
        padding: 0.25rem;
        /* height: 3rem; */
        margin-bottom: 0;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
    }
</style>
