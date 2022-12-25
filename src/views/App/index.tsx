import React, {useState} from 'react'
import styles from './index.module.scss'
import {useTodoStore} from '../../data/stores/useToDoStore';
import {InputPlus} from '../components/InpuPlus';
import {InputTask} from '../components/InpuTask';
import { Reorder } from "framer-motion"

export const App: React.FC = () => {

    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useTodoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ])

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>
                <InputPlus
                    onAdd={(title) => {
                        if (title) {
                            createTask(title)
                        }
                    }}
                />
            </section>
            <section className={styles.articleSection}>
                {!tasks.length && (<p className={styles.articleText}>There is no one task</p>
                )}
                {tasks.map((task) => (
                    <InputTask
                        task={task}
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />))}
            </section>
        </article>
    )
}