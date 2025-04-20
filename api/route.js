export default function (req, res) {
  res.send(
    <script>
      window.location.href = "${req.url}";
    </script>
  );
}
