<% _.forEach(sprites, function (sprite) { %>
$<%- sprite.name %>_name = '<%- sprite.name %>'
$<%- sprite.name %>_size = <%- sprite.pxr.width %> <%- sprite.pxr.height %>
$<%- sprite.name %>_offset = <%- sprite.pxr.offset_x %> <%- sprite.pxr.offset_y %>
$<%- sprite.name %>_position = <%- sprite.pxr.x %> <%- sprite.pxr.y %>
$<%- sprite.name %>_image = '<%- sprite.image %>'
$<%- sprite.name %>_scale = <%- sprite.pxr.total_width %> <%- sprite.pxr.total_height %>
$<%- sprite.name %> = <%- sprite.pxr.x %> <%- sprite.pxr.y %> <%- sprite.pxr.offset_x %> <%- sprite.pxr.offset_y %> <%- sprite.pxr.width %> <%- sprite.pxr.height %> <%- sprite.pxr.total_width %> <%- sprite.pxr.total_height %> '<%- sprite.image %>' '<%- sprite.name %>'
<% }) %>
spriteWidth($sprite) {
  width: $sprite[4];
}
spriteHeight($sprite) {
  height: $sprite[5];
}
spritePosition($sprite) {
  background-position: $sprite[2] $sprite[3];
}
spriteImage($sprite) {
  background-image: url($sprite[8]);
}

spriteSize($sprite) {
  background-size: $sprite[6] $sprite[7];
}

sprite($sprite) {
  spriteImage($sprite)
  spritePosition($sprite)
  spriteWidth($sprite)
  spriteHeight($sprite)
  spriteSize($sprite)
}

sprites($sprites) {
  for $sprite in $sprites {
    $sprite_name = $sprite[9];
    .{$sprite_name} {
      sprite($sprite);
    }
  }
}
