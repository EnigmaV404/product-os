"use client";

import { useMemo, useState } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  Position
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";

import type { BrainNode } from "@/data/content-schema";
import { getConnectedIds } from "@/lib/helpers";
import { cn } from "@/lib/utils";

type ProductBrainProps = {
  nodes: readonly BrainNode[];
  edges: readonly (readonly [string, string])[];
};

type BrainNodeData = {
  title: string;
  active: boolean;
  dimmed: boolean;
};

function BrainCard({ data }: NodeProps<Node<BrainNodeData>>) {
  return (
    <div
      className={cn(
        "min-w-40 rounded-2xl border bg-paper px-5 py-4 text-center shadow-line transition duration-300",
        data.active && "scale-110 border-river bg-white shadow-soft",
        data.dimmed && "scale-95 opacity-25"
      )}
    >
      <div className="mx-auto mb-2 h-2 w-2 rounded-full bg-river" />
      <p className="display text-xl text-ink">{data.title}</p>
    </div>
  );
}

const nodeTypes = { brainCard: BrainCard };

const positions: Record<string, { x: number; y: number }> = {
  platform: { x: 420, y: 240 },
  revenue: { x: 420, y: 0 },
  operations: { x: 130, y: 210 },
  customer: { x: 720, y: 90 },
  engineering: { x: 120, y: 430 },
  compliance: { x: 720, y: 360 },
  partners: { x: 430, y: 510 },
  experimentation: { x: 760, y: 580 },
  ai: { x: 20, y: 30 }
};

export function ProductBrain({ nodes, edges }: ProductBrainProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState(nodes[0]?.id ?? "");
  const activeId = hovered ?? selected;
  const connected = useMemo(
    () => getConnectedIds(activeId, edges),
    [activeId, edges]
  );
  const selectedNode = nodes.find((node) => node.id === selected) ?? nodes[0];

  const flowNodes = useMemo<Node<BrainNodeData>[]>(
    () =>
      nodes.map((node) => ({
        id: node.id,
        type: "brainCard",
        position: positions[node.id] ?? { x: 0, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          title: node.title,
          active: activeId === node.id,
          dimmed: Boolean(activeId && !connected.has(node.id))
        }
      })),
    [activeId, connected, nodes]
  );

  const flowEdges = useMemo<Edge[]>(
    () =>
      edges.map(([source, target]) => {
        const active = connected.has(source) && connected.has(target);
        return {
          id: `${source}-${target}`,
          source,
          target,
          animated: active,
          style: {
            stroke: active ? "#2f6672" : "rgba(18,20,23,0.18)",
            strokeWidth: active ? 2.4 : 1.2
          }
        };
      }),
    [connected, edges]
  );

  return (
    <section className="section-shell" id="brain">
      <div className="mb-8 max-w-3xl">
        <p className="kicker">Product Brain</p>
        <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
          A map of how recurring problems become reusable systems.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_390px]">
        <div className="flow-grid h-[620px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/42 shadow-line">
          <ReactFlow
            edges={flowEdges}
            fitView
            fitViewOptions={{ padding: 0.28 }}
            maxZoom={1.1}
            minZoom={0.35}
            nodeTypes={nodeTypes}
            nodes={flowNodes}
            onInit={(instance) => {
              window.setTimeout(() => {
                instance.fitView({ padding: 0.28, duration: 300 });
              }, 80);
            }}
            onNodeClick={(_, node) => setSelected(node.id)}
            onNodeMouseEnter={(_, node) => setHovered(node.id)}
            onNodeMouseLeave={() => setHovered(null)}
            panOnScroll
          >
            <Background color="rgba(18,20,23,0.18)" gap={28} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        <motion.aside
          className="rounded-[1.5rem] border border-ink/10 bg-ink p-6 text-paper shadow-soft"
          key={selectedNode.id}
          layout
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-paper/50">
            Selected Node
          </p>
          <h3 className="display mt-3 text-4xl">{selectedNode.title}</h3>
          <div className="mt-7 space-y-5">
            {[
              ["Problem", selectedNode.problem],
              ["Decision", selectedNode.decision],
              ["Outcome", selectedNode.outcome],
              ["Learning", selectedNode.learning],
              ["Future Approach", selectedNode.futureApproach]
            ].map(([label, value]) => (
              <div className="border-t border-paper/12 pt-4" key={label}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brass">
                  {label}
                </p>
                <p className="mt-2 leading-7 text-paper/78">{value}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
