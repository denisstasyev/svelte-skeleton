<script>
	export let secondaryColor = '#f5f5f7'
	export let primaryColor = '#ebecef'

	export let height = 200
	export let width = 400
	export let speed = 2
	export let animate = true

	let idClip = getUniqueId()
	let idGradient = getUniqueId()

	function getUniqueId() {
		return Math.random().toString(36).substring(2)
	}

	// stop-opacity is used for Safari
</script>

<svg {width} {height} aria-labelledby="loading-aria">
	<rect fill="url(#{idGradient})" clip-path="url(#{idClip})" {width} {height} x="0" y="0" />
	<defs>
		<clipPath id={idClip}>
			<slot>
				<rect {width} {height} x="0" y="0" rx="8" ry="8" />
			</slot>
		</clipPath>
		<linearGradient id={idGradient}>
			<stop stop-color={primaryColor} stop-opacity="1" offset="0%">
				{#if animate}
					<animate
						attributeName="offset"
						dur={speed + 's'}
						from="-2"
						to="1"
						repeatCount="indefinite"
					/>
				{/if}
			</stop>
			<stop stop-color={secondaryColor} stop-opacity="1" offset="50%">
				{#if animate}
					<animate
						attributeName="offset"
						dur={speed + 's'}
						from="-1.5"
						to="1.5"
						repeatCount="indefinite"
					/>
				{/if}
			</stop>
			<stop stop-color={primaryColor} stop-opacity="1" offset="100%">
				{#if animate}
					<animate
						attributeName="offset"
						dur={speed + 's'}
						from="-1"
						to="2"
						repeatCount="indefinite"
					/>
				{/if}
			</stop>
		</linearGradient>
	</defs>
</svg>
