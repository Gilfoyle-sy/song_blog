import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.i35rQw0I.js";const A=JSON.parse('{"title":"flex","description":"","frontmatter":{},"headers":[],"relativePath":"column/ClassCSS/flex.md","filePath":"column/ClassCSS/flex.md"}'),l={name:"column/ClassCSS/flex.md"},e=n(`<h1 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="父" tabindex="-1">父 <a class="header-anchor" href="#父" aria-label="Permalink to &quot;父&quot;">​</a></h3><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex-direction: row; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// row-reverse | column | column-reverse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex-wrap: nowrap; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// wrap wrap-reverse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">justify-content: flex-start; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-end | center | space-around | space-between</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 侧轴-单行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// stretch（默认值） 如果项目未设置高度或设为auto，将占满整个容器的高度。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">align-items: stretch; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-start flex-end | center | base-line</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 侧轴-多行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// stretch（默认值）：轴线占满整个交叉轴</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">align-content: stretch; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-start |  flex-end | center | space-around | space-between | stretch</span></span></code></pre></div><h3 id="子" tabindex="-1">子 <a class="header-anchor" href="#子" aria-label="Permalink to &quot;子&quot;">​</a></h3><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 从小到大排列 , 可设置负值.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">order: 1; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex-grow: 0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex-shrink: flex-start; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-end | center | space-around | space-between</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex-basis: auto; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;length&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">align-self: auto; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 侧轴（多行） | flex-start | flex-end | center | baseline | stretch;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 快捷值：auto (1 1 auto) | none (0 0 auto) | 1 (1 1 0) 。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flex: none | [ &lt; &#39;flex-grow&#39; &gt; &lt; &#39;flex-shrink&#39; &gt;? || &lt; &#39;flex-basis&#39; &gt;];</span></span></code></pre></div><h2 id="常见问题及解决方案" tabindex="-1">常见问题及解决方案 <a class="header-anchor" href="#常见问题及解决方案" aria-label="Permalink to &quot;常见问题及解决方案&quot;">​</a></h2><ol><li><p>子元素溢出</p><blockquote><p>在 Flex 布局中，如果元素的大小超过了父容器的大小，那么该元素会自动溢出。要处理溢出的情况，使用 overflow 属性来指定溢出时的处理方式。</p></blockquote></li><li><p>改变子元素间隔</p><blockquote><p>要改变 Flex 元素之间的间隔，使用 gap 属性。该属性指定了元素之间的间距。例如，要增加元素之间的间距，为父元素设置 gap</p></blockquote></li><li><p>子元素大小</p><blockquote><p>使用 max-width 和 min-width 属性限制元素的最大和最小宽度,使用 max-height 和 min-height 属性限制元素的最大和最小高度</p></blockquote></li><li><p>多行排列，每行平分，但是最后一行希望靠左排列平分</p><blockquote><p>最后一行添加空元素，并加以判断渲染个数；或者使用百分比，但不完美</p></blockquote></li></ol>`,8),t=[e];function p(h,k,r,c,o,d){return i(),a("div",null,t)}const f=s(l,[["render",p]]);export{A as __pageData,f as default};
