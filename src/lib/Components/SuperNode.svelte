<!-- <script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
   
    type $$Props = NodeProps;
    export let data: $$Props['data'];
    export let isConnectable: $$Props['isConnectable'];
   
    const { label } = data;
  </script>
  <figure>
   
  <Handle type="target" position={Position.Left} style="background: #555;" {isConnectable} />
    
  <span>
    {label}
  </span>
 
  <Handle
    type="source"
    position={Position.Right}
    id="a"
    style="top: 10px; background: #555;"
    {isConnectable}
 
  />

  
</figure> -->
<script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
   
    type $$Props = NodeProps;
    export let data: $$Props['data'];
    export let isConnectable: $$Props['isConnectable'];
   
    const { label } = data;
  </script>
    <Handle type="target" position={Position.Bottom}   style=" background: transparent; border: none" {isConnectable} />

  <figure class="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded p-1.5 py-0.5 ">
 
    <Handle
    type="source"
    position={Position.Bottom}
    id="a"
    style=" background: transparent; border: none"
    {isConnectable}
 
  />
  <span class="font-semibold">
    {label}
  </span>
 
</figure>