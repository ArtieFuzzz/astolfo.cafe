<div class="flex flex-col justify-start items-start w-screen py-24 px-12 gap-20">
	<div class="flex flex-col">
		<h1 class="font-heading text-5xl">Astolfo’s Café</h1>
		<p class="font-body text-2xl">How we handle your <span class="font-bold">Data</span></p>
	</div>

  <div class='max-w-6xl'>
    <p class="font-body text-xl">
      This site utilizes <span class="font-bold">Cloudflare</span>
      <a
        href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
        >[What do Cloudflare cookies do?]</a
      >
      these cookies may be blocked but may impact site functionality. <br /> <br /> Additionally this
      site uses self-hosted instance of <span class="font-bold">Plausible Analytics</span> (<a
        href="https://analytics.astolfo.cafe">analytics.astolfo.cafe</a
      >), Plausible respects the "Do-Not-Track" header, and we don't sell your data to any
      third-party. [<a href="https://github.com/plausible/analytics">Plausible</a>]
    </p>
  </div>
</div>

<style lang="scss">
	:where(a) {
		@apply underline;
	}
</style>
